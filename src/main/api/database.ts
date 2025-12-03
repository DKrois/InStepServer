import { LRUCache } from 'lru-cache';
import * as fs from 'node:fs/promises';
import { join } from 'node:path';
import { Durations } from '../../common/time';
import { userDataPath } from '../app/app.js';
import { mainWindow } from '../app/window.js';
import { errorWithMessage, info, warn } from '../logging.js';
import { writeJSON } from '../util.js';

export const defaultDBPath = join(userDataPath, 'data');

let _db: ProjectDatabase | null = null;

export interface DirectoryStats {
    directoryCount: number;
    fileCount: number;
    size: number;
}

//export interface ProjectData {}
export type ProjectData = any;

class ProjectDatabase {
    private cache: LRUCache<string, ProjectData>;

    constructor(private dbPath: string) {
        fs.mkdir(dbPath, { recursive: true }); // nothing happens if dir already exists

        this.cache = new LRUCache<string, ProjectData>({
            // num of items to store, oldest are removed first
            max: 10,

            // max age
            ttl: 15 * Durations.msInMinute,
        });
    }

    get path(): string {
        return this.dbPath;
    }

    private _getCacheKey(id: number, version: number): string {
        return `project-${id}-v${version}`;
    }

    private _createPath(id: number, version?: number, ...additional: string[]): string {
        const base = join(this.dbPath, id.toString());
        const fullPath = version !== null && version !== undefined ? join(base, `v${version}`) : base;
        return additional.length ? join(fullPath, ...additional) : fullPath;
    }

    private _extractVersionNumber(path: string) {
        const match = path.match(/^v(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    }

    /**
     * Creates a new version and saves the JSON data.
     * floorplanImages will be removed.
     */
    async add(id: number, version: number, data: any) {
        const versionPath = this._createPath(id, version);
        await fs.mkdir(versionPath, { recursive: true });

        const { floorplanImages, ...projectData } = data;

        const path = join(versionPath, 'data.json');
        await writeJSON(path, projectData);

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
    }

    /**
     * Reads a project file.
     * @param id project id
     * @param version version to read. If absent, uses most recent one
     */
    async get(id: number, version?: number): Promise<ProjectData> {
        const v = version ?? (await this.getLatestVersion(id))?.version;
        if (!v) throw new Error(`${id}/@latest not found.`);

        const cacheKey = this._getCacheKey(id, v);
        if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

        const filePath = this._createPath(id, v, 'data.json');
        const json = await fs.readFile(filePath, 'utf8');
        const data: ProjectData = JSON.parse(json);

        // update cache
        this.cache.set(cacheKey, data);
        return data;
    }

    /**
     * Returns an array of project versions.
     * @param id project id
     */
    async list(id: number): Promise<number[]> {
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
     * @returns An object containing the total size and subdirectory and file counts.
     */
    async getStats(directoryPath: string = this.dbPath): Promise<DirectoryStats> {
        let stats: DirectoryStats = { directoryCount: 0, fileCount: 0, size: 0 };

        try {
            // use withFileTypes: true to get fs.Dirent objects
            const entries = await fs.readdir(directoryPath, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = join(directoryPath, entry.name);

                if (entry.isDirectory()) {
                    stats.directoryCount++;
                    // Recursively call and add the stats from the subdirectory
                    const subDirStats = await this.getStats(fullPath);
                    stats.directoryCount += subDirStats.directoryCount;
                    stats.fileCount += subDirStats.fileCount;
                    stats.size += subDirStats.size;
                } else if (entry.isFile() && entry.name.endsWith('.json')) {
                    stats.fileCount++;
                    try {
                        const fileStats = await fs.stat(fullPath);
                        stats.size += fileStats.size; // .size is in bytes
                    } catch (err) {
                        // This can happen if the file is deleted between readdir and stat calls
                        errorWithMessage(`Could not get stats for file: ${fullPath}`, err);
                    }
                }
            }
        } catch (error: any) {
            // only print if error isn't 'no such file or directory'
            if (error.code !== 'ENOENT') errorWithMessage(`Could not read directory: ${directoryPath}`, error);
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
        if (!_db) {
            throw new Error('Database has not been initialized.');
        }
        return _db[prop as keyof ProjectDatabase];
    }
});