import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

import config from '../Config';
import BaseDao from './BaseDao';
import DbUtils from '../utils/DbUtils';


abstract class BaseDaoImpl<PK, MODEL> implements BaseDao<PK, MODEL> {


    public db: sqlite.Database = new sqlite3.Database(config.db, () => { });
    private model: MODEL = {} as MODEL;
    constructor() {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public getModelName(): string {
        return this.model.constructor.name;
    }

    list(): Array<MODEL> {
        let sql: string = `SELECT * from ${this.getModelName()}`;
        DbUtils.getInstance().getDb()
            .all(sql, (err, rows) => {
                if (err) {
                    console.error(err);
                }
                if (!rows) {
                    return;
                }
                rows.forEach(row => {
                    console.log(sql, "->", row);
                });
            });
        return [];
    }

    save(pk: PK, model: MODEL): MODEL {
        let sql: string = `SELECT * from ${this.getModelName()}`;
        DbUtils.getInstance().getDb()
        return {} as MODEL;
    }

    get(pk: PK): MODEL {
        return {} as MODEL;
    }

    update(pk: PK, model: MODEL): MODEL {
        return {} as MODEL;
    }

    delete(pk: PK): void {

    }
}


export default BaseDaoImpl;