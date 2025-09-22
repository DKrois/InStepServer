import { join } from 'node:path';
import Database from 'better-sqlite3';
import { dbPath } from './config.json'
import { cwd } from 'node:process';
import { log } from './util';

class ProjectDatabase {
    private db: Database.Database | undefined;

    constructor(private dbPath: string) {}

    async connect() {
        if (this.db) return;
        this.db = new Database(this.dbPath);
        log(`Connected to DB: ${this.dbPath}`);
    }

    async disconnect() {
        if (this.db) {
            this.db.close();
            this.db = undefined;
        }
    }
}

export const projectDB = new ProjectDatabase(join(cwd(), dbPath));