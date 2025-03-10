import * as SQLite from 'expo-sqlite';

class Database {
    private db: SQLite.SQLiteDatabase;

    constructor() {
        this.db = SQLite.openDatabaseSync('aurora.db');
    }

    async init() {
        await this.configureTables();
    }

    getDatabase(): SQLite.SQLiteDatabase {
        return this.db;
    }

    private async configureTables() {
        await this.createCategoryTable()
        await this.createGoalTable()
    }

    private async createCategoryTable() {
        const result = await this.db.getAllAsync(
            `SELECT name FROM sqlite_master WHERE type='table' AND name='usuarios';`
        );

        if (result.length > 0) return;

        this.db.execAsync(`
            CREATE TABLE category (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                description TEXT NOT NULL,
                icon TEXT NOT NULL,
                color TEXT NOT NULL,
                backgroundColor TEXT NOT NULL,
                sequence INTEGER NOT NULL
            ); 

            INSERT INTO category (description, icon, color, backgroundColor, sequence) VALUES ('Saúde e Bem-Estar', 'Heart', '#ec4899', '#fdf2f8', 1);
            INSERT INTO category (description, icon, color, backgroundColor, sequence) VALUES ('Finanças e Investimentos', 'Coins', '#eab308', '#fefce8', 2);
            INSERT INTO category (description, icon, color, backgroundColor, sequence) VALUES ('Desenvolvimento Pessoal', 'GraduationCap', '#3b82f6', '#eff6ff', 3);
            INSERT INTO category (description, icon, color, backgroundColor, sequence) VALUES ('Projetos e Tecnologia', 'Laptop', '#a855f7', '#faf5ff', 4);
            INSERT INTO category (description, icon, color, backgroundColor, sequence) VALUES ('Lazer', 'Plane', '#f97316', '#fff7ed', 5);
        `)
    }

    private async createGoalTable() {
        this.db.execAsync(`
            CREATE TABLE IF NOT EXISTS goal (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                category_id INTEGER NOT NULL,
                FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
            );
        `)
    }
}

export default new Database();