import { app } from 'electron';
import * as fs from 'node:fs/promises';
import { join } from 'node:path';
import { dbPath } from '../config.json';
import { errorWithMessage } from './util.js';

export interface DirectoryStats {
    directoryCount: number;
    fileCount: number;
    size: number;
}

class ProjectDatabase {
    constructor(private dbPath: string) {
        fs.mkdir(dbPath, { recursive: true }); // nothing happens if dir already exists
    }

    get path(): string {
        return this.dbPath;
    }

    private _createPath(id: number, version?: number, ...additional: string[]): string {
        const base = join(this.dbPath, id.toString());
        const fullPath = version !== null && version !== undefined ? join(base, `v${version}`) : base;
        return additional.length ? fullPath : join(fullPath, ...additional);
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

        // Multer saves to a temporary path, so we move it to the final destination.
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
    }

    /**
     * Reads a project file.
     * @param id project id
     * @param version version to read. If absent, uses most recent one
     */
    async get(id: number, version?: number) {
        const v = version ? `v${version}.json` : (await this.getLatestVersion(id))?.path;
        if (!v) throw new Error(`${id}/@latest not found.`);

        const filePath = this._createPath(id, version, 'data.json');
        const json = await fs.readFile(filePath, 'utf8');
        return JSON.parse(json);
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

    private _extractVersionNumber(path: string) {
        const match = path.match(/^v(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
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
 * Safely writes a JSON file at `path`.
 * This avoids corrupted or half-written files in case of a crash.
 */
async function writeJSON(path: string, data: any) {
    const dataStr = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

    const tmp = `${path}.tmp`;
    await fs.writeFile(tmp, dataStr, { encoding: 'utf8'});
    await fs.rename(tmp, path);
}

export const projectDB = new ProjectDatabase(join(app.getPath('userData'), dbPath));