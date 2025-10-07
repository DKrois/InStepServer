import * as fs from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';
import { dbPath } from '../config.json';

class ProjectDatabase {
    constructor(private dbPath: string) {}

    async add(id: number, version: number, data: any) {
        const folderPath = join(this.dbPath, id.toString());
        await fs.mkdir(folderPath, { recursive: true }); // nothing happens if dir already exists

        const jsonFileName = `v${version}.json`;
        const path = join(folderPath, jsonFileName);
        await writeJSON(path, JSON.stringify(data, null, 2));
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
}

async function writeJSON(path: string, data: any) {
    const dataStr = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

    const tmp = `${path}.tmp`;
    await fs.writeFile(tmp, dataStr, { encoding: 'utf8'});
    await fs.rename(tmp, path);
}

export const projectDB = new ProjectDatabase(join(cwd(), dbPath));