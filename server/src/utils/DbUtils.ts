
import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();


class DbUtils {

    private static INSTANCE: DbUtils;
    private db: sqlite.Database;

    private constructor() {
    }

    public static getInstance(): DbUtils {
        if (!this.INSTANCE) {
            this.INSTANCE = new DbUtils();
        }

        return this.INSTANCE;
    }

    public async setDb(db: string) {
        if (this.db) {
            await this.close();
        }
        this.db = new sqlite3.Database(db, (err) => {
            if (err) {
                console.error('Could not connect to database:', db, err)
            } else {
                console.log('Connected to database', db)
            }
        });
        this.db.on("error", (error) => {
            console.error("DbUtils error : ", error);
        });
    }

    public getDb(): sqlite.Database {
        return this.db;
    }


    public async close() {
        this.db.close();
        this.db = null;
    }

    public async run(sql: string, params: any): Promise<any> {
        let resolve: Promise<any> = new Promise<any>((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('[ERROR] sql ' + sql);
                    reject(err)
                    return;
                }
                console.log("[run] -->", this);
                resolve({ id: this.lastID, changes: this.changes });

            });
        });
        return resolve;
    }

    public async all(sql: string, params: any): Promise<any> {
        let resolve: Promise<any> = new Promise<any>((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('[ERROR] sql ' + sql);
                    reject(err)
                    return;
                }
                console.log("[all] ", sql, " --> ", rows);
                if (!rows) {
                    return;
                }
                resolve(rows)
            });
        });
        return resolve;
    }

    public async get(table: string, where: any): Promise<any> {
        let resolve: Promise<any> = new Promise<any>((resolve, reject) => {
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
                    console.log('[ERROR] sql ' + sql);
                    reject(err)
                    return;
                }
                console.log("[get] ", sql, " --> ", rows);
                if (!rows) {
                    return;
                }
                resolve(rows)
            });
        });
        return resolve;
    }


    public async insert(table: string, model: any): Promise<any> {
        let resolve: Promise<any> = new Promise<any>((resolve, reject) => {
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

            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('[ERROR] sql ', sql, err);
                    reject(err)
                    return;
                }
                console.log("[get] ", sql, " --> ", rows);
                if (!rows) {
                    return;
                }
                resolve(rows)
            });
        });
        return resolve;
    }

    public async update(table: string, model: any, where: any): Promise<any> {
        let resolve: Promise<any> = new Promise<any>((resolve, reject) => {
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

            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('[ERROR] sql ', sql, err);
                    reject(err)
                    return;
                }
                console.log("[get] ", sql, " --> ", rows);
                if (!rows) {
                    return;
                }
                resolve(rows)
            });
        });
        return resolve;
    }

    public async delete(table: string, where: any): Promise<any> {
        let resolve: Promise<any> = new Promise<any>((resolve, reject) => {
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

            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('[ERROR] sql ' + sql);
                    reject(err)
                    return;
                }
                console.log("[get] ", sql, " --> ", rows);
                if (!rows) {
                    return;
                }
                resolve(rows)
            });
        });
        return resolve;
    }
}

export default DbUtils;