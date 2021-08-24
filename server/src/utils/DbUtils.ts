
import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();


class DbUtils {

    private static INSTANCE: DbUtils;
    private db: sqlite.Database;
    private static debug: boolean = false;

    private constructor() {
    }

    public static getInstance(): DbUtils {
        if (!this.INSTANCE) {
            this.INSTANCE = new DbUtils();
        }

        return this.INSTANCE;
    }

    public static setDebug(debug: boolean) {
        this.debug = debug;
    }
    public async setDb(db: string) {

        return new Promise<void>(async (resolve, reject) => {
            if (this.db) {
                await this.close();
            }
            this.db = new sqlite3.Database(db, (err) => {
                if (err) {
                    console.error(new Date().toISOString(), this.constructor.name, 'Could not connect to database:', db, err);
                    reject(err);
                } else {
                    console.log(new Date().toISOString(), this.constructor.name, 'Connected to database', db);
                    resolve();
                }
            });
            this.db.on("error", (error) => {
                console.error(new Date().toISOString(), this.constructor.name, "DbUtils error : ", error);
                // reject(error);
            });
        });
    }

    public getDb(): sqlite.Database {
        return this.db;
    }


    public close() : Promise<void> {

        return new Promise<void>((resolve, reject) => {
            this.db.close((err) => {
                if (err) {
                    reject(err);
                    return;
                }
                this.db = null;
                resolve();
            });
        });

    }

    public run(sql: string, params: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.error(new Date().toISOString(), this.constructor.name, '[ERROR] sql ', sql, err);
                    reject(err)
                    return;
                }
                if (DbUtils.debug) console.log(new Date().toISOString(), this.constructor.name, "[run] -->", this);
                resolve({ id: this.lastID, changes: this.changes });

            });
        });
    }

    public all(sql: string, params: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.error(new Date().toISOString(), this.constructor.name, '[ERROR] sql ', sql, err);
                    reject(err)
                    return;
                }
                if (DbUtils.debug) console.log(new Date().toISOString(), this.constructor.name, "[all] ", sql, " --> ", rows);
                resolve(rows)
            });
        });
    }

    public get(table: string, where: any): Promise<any[]> {
        return new Promise<any>((resolve, reject) => {
            let length = Object.keys(where).length;
            let params: any = new Array(length);
            let whereSql: string = '';
            if (length > 0) {
                whereSql += " WHERE ";
                let index: number = 0;

                for (let key in where) {
                    whereSql += `${key} = ? AND `;
                    params[index++] = where[key];
                }
                whereSql = whereSql.substr(0, whereSql.length - 4);
            }

            let sql: string = `SELECT * FROM ${table} ${whereSql}`;

            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.error(new Date().toISOString(), this.constructor.name, '[ERROR] sql ', sql, err);
                    reject(err);
                    return;
                }
                if (DbUtils.debug) console.log(new Date().toISOString(), this.constructor.name, "[get] ", sql, " --> ", rows);
                resolve(rows);
            });
        });
    }


    public insert(table: string, model: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let length = Object.keys(model).length;
            let params: any = new Array(length);
            let namesSql: string = '';
            let valuesSql: string = '';

            let index: number = 0;

            for (let key in model) {
                namesSql += `${key}, `;
                valuesSql += " ?, "
                params[index++] = model[key];
            }
            namesSql = namesSql.substr(0, namesSql.length - 2);
            valuesSql = valuesSql.substr(0, valuesSql.length - 2);


            let sql: string = `INSERT INTO ${table} (${namesSql}) VALUES (${valuesSql})`;

            this.db.run(sql, params, function (err) {
                if (err) {
                    console.error(new Date().toISOString(), this.constructor.name, '[ERROR] sql ', sql, err);
                    reject(err);
                    return;
                }
                if (DbUtils.debug) console.log(new Date().toISOString(), this.constructor.name, "[insert] ", sql, " --> ", this);
                resolve({ lastID: this.lastID, changes: this.changes });
            });
        });
    }

    public update(table: string, model: any, where: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let length = Object.keys(model).length + Object.keys(where).length;
            let params: any = new Array(length);
            let setSql: string = '';
            let whereSql: string = '';

            let index: number = 0;

            for (let key in model) {
                setSql += `${key} = ? AND `;
                params[index++] = model[key];
            }
            setSql = setSql.substr(0, setSql.length - 4);


            for (let key in where) {
                whereSql += `${key} = ? AND `;
                params[index++] = where[key];
            }

            whereSql = whereSql.substr(0, whereSql.length - 4);

            let sql: string = `UPDATE ${table} SET ${setSql} WHERE ${whereSql}`;

            this.db.run(sql, params, function (err) {
                if (err) {
                    console.error(new Date().toISOString(), this.constructor.name, '[ERROR] sql ', sql, err);
                    reject(err);
                    return;
                }
                if (DbUtils.debug) console.log(new Date().toISOString(), this.constructor.name, "[update] ", sql, " --> ", this);
                resolve({ lastID: this.lastID, changes: this.changes });
            });
        });
    }

    public delete(table: string, where: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let length = Object.keys(where).length;
            let params: any = new Array(length);
            let whereSql: string = '';

            let index: number = 0;

            for (let key in where) {
                whereSql += `${key} = ? AND `;
                params[index++] = where[key];
            }
            whereSql = whereSql.substr(0, whereSql.length - 4);


            let sql: string = `DELETE FROM ${table} WHERE ${whereSql}`;

            this.db.run(sql, params, function (err) {
                if (err) {
                    console.error(new Date().toISOString(), this.constructor.name, '[ERROR] sql ', sql, err);
                    reject(err);
                    return;
                }
                if (DbUtils.debug) console.log(new Date().toISOString(), this.constructor.name, "[delete] ", sql, " --> ", this);
                resolve({ lastID: this.lastID, changes: this.changes });
            });
        });
    }
}

export default DbUtils;