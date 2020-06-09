
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
            this.close();
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


    public close() {
        this.db.close();
        this.db = null;
    }

    public run(sql: string, params: any): any {
        let resolve: any = new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve({ id: this.lastID })
                }
            });
        });
        return resolve.id;
    }
}

export default DbUtils;