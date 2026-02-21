import { LRUCache } from 'lru-cache';
import * as fs from 'node:fs/promises';
import { join } from 'node:path';
import { cacheMaxAgeSeconds, cacheSize } from '../../../config.json';
import { mainWindow } from '../app/window.js';
import { error as _error, info as _info, warn as _warn } from '../log.js';
import { writeJSON } from '../util.js';

const logSource = 'db';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);
const error = (str: string, err: unknown) => _error(str, err, logSource);

let _db: ProjectDatabase | null = null;

export interface DirectoryStats {
    directoryCount: number;
    fileCount: number;
    size: number;
}

export interface SimplifiedProject {
    properties: {
        projectName: string;
    };
    floorplanImages: Record<string, string | null>;
}

const projectSchema = {
    type: 'string',
    properties: {
        projectName: 'string',
        elementTypeStyles: 'object',
    },
    floorplanImages: 'object',
};

class ProjectDatabase {
    private cache: LRUCache<string, SimplifiedProject>;

    constructor(private dbPath: string) {
        fs.mkdir(dbPath, { recursive: true }); // nothing happens if dir already exists

        this.cache = new LRUCache<string, SimplifiedProject>({
            // num of items to store, oldest are removed first
            max: cacheSize,

            // max age
            ttl: 1000 * cacheMaxAgeSeconds,
        });
    }

    get path(): string {
        return this.dbPath;
    }

    private _getCacheKey(id: number, version: number): string {
        return `project-${id}-${this.createVersionString(version)}`;
    }

    private _createPath(id?: number, version?: number, ...additional: string[]): string {
        const joinIfDefined = (...str: (string | null | undefined)[]) =>
            join(...str.filter(s => s !== null && s !== undefined));

        const base = joinIfDefined(this.dbPath, id?.toString());
        const fullPath = joinIfDefined(base, this.createVersionString(version));
        return joinIfDefined(fullPath, ...additional);
    }

    public createVersionString(version?: number): string | undefined {
        return version ? `v${version}` : undefined;
    }

    private _extractVersionNumber(path: string) {
        const match = path.match(/^v(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    }

    /**
     * Checks if the provided structure is a valid project object.
     * @param project
     * @private
     */
    private validateProject(project: any): { valid: true } | { valid: false, message: string } {
        try {
            // Check top-level keys in schema only
            for (const key of Object.keys(projectSchema)) {
                if (!(key in project)) return { valid: false, message: `${key} not found in project` };

                const rule = (project as Record<string, any>)[key];
                const value = project[key];

                // If the rule is a list → check required subkeys
                if (Array.isArray(rule)) {
                    for (const sub of rule) {
                        if (!(sub in value)) return { valid: false, message: `${sub} is not in ${key}` };
                    }
                }

                // If the rule is "object" → just ensure it's an object
                if (rule === 'object' && (typeof value !== 'object' || value === null)) {
                    return { valid: false, message: `${key} is not in object` };
                }

                // If it's the `properties` object → check nested structure
                if (key === 'properties') {
                    for (const [k, type] of Object.entries(rule)) {
                        if (!(k in value)) return { valid: false, message: `${k} is not in project properties` };

                        const propertyType = typeof value[k];
                        if (propertyType !== type) return { valid: false, message: `${k} is of invalid type ${propertyType} (required ${type})` };
                    }

                    const { floorplanImages } = value;
                    if (typeof floorplanImages !== 'object' && floorplanImages !== null) {
                        return { valid: false, message: `floorplanImages is not an object` };
                    }
                }
            }

            return { valid: true };
        } catch (e) {
            error('Error validating project', e);
            return { valid: false, message: 'error' };
        }
    }

    clearCache(): void {
        this.cache.clear();
    }

    /**
     * Creates a new version and saves the JSON data.
     * floorplanImages will be removed.
     */
    async add(id: number, version: number, data: SimplifiedProject) {
        if (!this.validateProject(data)) throw new Error(`Project structure not valid`);
        const versionPath = this._createPath(id, version);
        await fs.mkdir(versionPath, { recursive: true });

        // set all floorplanImages to null
        if (data.floorplanImages) Object.keys(data.floorplanImages).forEach(k => data.floorplanImages[k] = null);

        const path = join(versionPath, 'data.json');
        await writeJSON(path, data);

        // cache invalid → remove old
        this.cache.delete(this._getCacheKey(id, version));
    }

    /**
     * Saves an image file to a specific project version.
     * @param id project id
     * @param version version number
     * @param file The uploaded file object.
     */
    async addImage(id: number, version: number, file: Express.Multer.File) {
        const versionPath = this._createPath(id, version);
        const newPath = join(versionPath, file.originalname); // Use originalname as filename

        // multer saves to a temporary path, so move it to the final destination
        await fs.mkdir(versionPath, { recursive: true });
        await fs.rename(file.path, newPath);
    }

    /**
     * Removes an entire project or a project version.
     * @param id project id
     * @param version version to remove. If absent, removes the entire project.
     */
    async delete(id: number, version?: number) {
        const path = this._createPath(id, version);
        await fs.rm(path, { recursive: true, force: true });

        if (version !== undefined) {
            this.cache.delete(this._getCacheKey(id, version));
        } else {
            // entire project deleted (likely multiple cache entries affected)
            // just clearing everything is fine here
            this.cache.clear();
        }

        // check if last version deleted → delete project folder
        const versions = await this.listVersionsForProject(id);
        if (versions.length === 0) await fs.rm(this._createPath(id), { recursive: true, force: true });
    }

    /**
     * Reads a project file.
     * If 'returnFull' is set to false, only the project data will be returned. Otherwise, the entire state will be used.
     * @param id project id
     * @param version version to read. If absent, uses most recent one
     */
    async get(id: number, version?: number): Promise<{ data: SimplifiedProject, version: number }> {
        const v = version ?? (await this.getLatestVersion(id))?.version;
        if (!v) throw new Error(`${id}/@latest not found.`);

        const cacheKey = this._getCacheKey(id, v);
        // use cached if available
        if (this.cache.has(cacheKey)) return { data: this.cache.get(cacheKey)!, version: v };

        const filePath = this._createPath(id, v, 'data.json');
        const json = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(json);

        // update cache
        this.cache.set(cacheKey, data);
        return { data, version: v };
    }

    /**
     * Checks if a project already exists.<br>
     * It is not recommended to call this function before accessing a project to check whether it exists,
     * but rather handling the error separately to avoid race conditions.
     * @param id Project ID
     */
    async exists(id: number): Promise<boolean> {
        const path = this._createPath(id);
        return fs.access(path).then(
            () => true,
            () => false,
        );
    }

    async listProjects(): Promise<{ name: string, id: number, latestVersion: number }[]> {
        const path = this._createPath();
        try {
            const projectIDs = await fs.readdir(path);
            const projects = projectIDs.map(async idStr => {
                const id = parseInt(idStr, 10);
                try {
                    const { data, version } = await this.get(id);
                    return { name: data.properties.projectName, id, latestVersion: version };
                } catch (e) { // possibly missing data.json
                    return undefined;
                }
            });

            return Promise.allSettled(projects)
                .then(results =>
                    results.map(result => {
                        if (result === null) return undefined;
                        if (result.status === 'fulfilled') {
                            return result.value;
                        } else {
                            error('Error reading project', result.reason);
                            return undefined;
                        }
                    }).filter(result => result !== undefined)
                );
        } catch {
            return [];
        }
    }

    /**
     * Returns an array of project versions.
     * @param id project id
     */
    async listVersionsForProject(id: number): Promise<number[]> {
        const path = this._createPath(id);
        try {
            const entries = await fs.readdir(path);
            return entries.map(this._extractVersionNumber).filter(v => v !== null);
        } catch {
            return [];
        }
    }

    /**
     * Gets a list of image filenames for a specific version.
     */
    async listImages(id: number, version: number): Promise<string[]> {
        const versionPath = this._createPath(id, version);
        try {
            const files = await fs.readdir(versionPath);
            return files.filter(file => !file.endsWith('.json'));
        } catch (e) {
            // If directory doesn't exist or is empty, return empty array
            return [];
        }
    }

    async getLatestVersion(id: number) {
        const path = this._createPath(id);
        const entries = await fs.readdir(path).catch(() => []);

        const versioned = entries
            .map(entry => ({ path: entry, version: this._extractVersionNumber(entry) }))
            .filter(e => e.version !== null) as ({ path: string, version: number })[];

        if (versioned.length === 0) return null;
        return versioned.reduce((a, b) => (b.version > a.version ? b : a));
    }

    /**
     * Efficiently counts subdirectories, files and their sizes within a given directory and subdirectories.
     * @param directoryPath The path to the directory to scan.
     * @param isTopLevel whether the specified path is the top directory (containing projects)
     * @returns An object containing the total size and subdirectory and file counts.
     */
    async getStats(directoryPath: string = this.dbPath, isTopLevel = true): Promise<DirectoryStats> {
        let stats: DirectoryStats = { directoryCount: 0, fileCount: 0, size: 0 };

        try {
            // use withFileTypes: true to get fs.Dirent objects
            const entries = await fs.readdir(directoryPath, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = join(directoryPath, entry.name);

                if (entry.isDirectory()) {
                    if (isTopLevel) { // projects are only at top level. subdirs are versions
                        stats.directoryCount++;
                    }

                    const subDirStats = await this.getStats(fullPath, false);
                    stats.fileCount += subDirStats.fileCount;
                    stats.size += subDirStats.size;
                } else if (entry.isFile()) {
                    stats.fileCount++;
                    try {
                        const fileStats = await fs.stat(fullPath);
                        stats.size += fileStats.size; // .size is in bytes
                    } catch (err) {
                        // This can happen if the file is deleted between readdir and stat calls
                        error(`Could not get stats for file: ${fullPath}`, err);
                    }
                }
            }
        } catch (error: any) {
            // only print if error isn't 'no such file or directory'
            if (error.code !== 'ENOENT') error(`Could not read directory: ${directoryPath}`, error);
            // Return zeroed stats if the directory can't be read
            return { directoryCount: 0, fileCount: 0, size: 0 };
        }

        return stats;
    }
}

/**
 * Initializes the database with a specific path. This should only be
 * called once at startup from the main process.
 * @param path absolute path to the project data folder
 */
export function initDB(path: string) {
    if (_db) {
        warn('Database has already been initialized.');
        return;
    }
    info(`Initializing database at path: ${path}`);
    _db = new ProjectDatabase(path);

    // tell the renderer process that the database is initialized → request stats
    mainWindow?.webContents.send('project-db-initialized');
}

export function isDBInitialized(): boolean {
    return _db !== null;
}

// proxy to avoid always using projectDB() and undefined errors
export const projectDB: ProjectDatabase = new Proxy({} as ProjectDatabase, {
    get(_, prop) {
        if (!_db) throw new Error('Database has not been initialized.');
        return _db[prop as keyof ProjectDatabase];
    }
});