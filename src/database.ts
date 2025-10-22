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
    constructor(private dbPath: string) {}

    get path(): string {
        return this.dbPath;
    }

    async add(id: number, version: number, data: any) {
        const folderPath = join(this.dbPath, id.toString());
        await fs.mkdir(folderPath, { recursive: true }); // nothing happens if dir already exists

        const jsonFileName = `v${version}.json`;
        const path = join(folderPath, jsonFileName);
        await writeJSON(path, data);
    }

    /**
     * Removes an entire project or a project file.
     * @param id project id
     * @param version version to remove. If absent, removes the entire project.
     */
    async delete(id: number, version?: number) {
        const path = join(this.dbPath, id.toString(), version ? `v${version}.json` : '');

        await fs.rm(path, { recursive: true });
    }

    /**
     * Reads a project file.
     * @param id project id
     * @param version version to read. If absent, uses most recent one
     */
    async get(id: number, version?: number) {
        const v = version ? `v${version}.json` : (await this.getLatestVersion(id))?.file;
        if (!v) throw new Error(`${id}/@latest not found.`);
        const filePath = join(this.dbPath, id.toString(), v);

        const json = await fs.readFile(filePath, 'utf8');
        return JSON.parse(json);
    }

    /**
     * Returns an array of project versions.
     * @param id project id
     */
    async list(id: number): Promise<number[]> {
        const path = join(this.dbPath, id.toString());
        const files = await fs.readdir(path);
        return files.map(this._extractVersionNumber).filter(v => v !== null);
    }

    async getLatestVersion(id: number) {
        const path = join(this.dbPath, id.toString());
        const files = await fs.readdir(path).catch(() => []);

        const versioned = files
            .map(file => ({ file, version: this._extractVersionNumber(file) }))
            .filter(f => f.version !== null) as ({ file: string, version: number })[];

        if (versioned.length === 0) return null;
        return versioned.reduce((a, b) => (b.version > a.version ? b : a));
    }

    private _extractVersionNumber(path: string) {
        const match = path.match(/^v(\d+)\.json$/);
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