import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

import config from '../Config';
import BaseDao from './BaseDao';
import DbUtils from '../utils/DbUtils';


abstract class BaseDaoImpl<MODEL> implements BaseDao<MODEL> {


    public static db: sqlite.Database = new sqlite3.Database(config.db, () => { });

    constructor() {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.findBy = this.findBy.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public abstract getTableName(): string;

    public abstract getPk(): string[];

     list(): Promise<MODEL[]> {
        let sql: string = `SELECT * FROM ${this.getTableName()}`;

        return DbUtils.getInstance().all(sql, []);
    }

     save(model: MODEL): Promise<MODEL> {

        return DbUtils.getInstance().insert(this.getTableName(), model);
    }

     get(pk: any): Promise<MODEL[]> {
        for (let key in this.getPk()) {
            if (!pk[this.getPk()[key]]) {
                return Promise.reject({ error: `PK(${this.getPk()}) ${this.getPk()[key]} is empty` });
            }
        }
        return DbUtils.getInstance().get(this.getTableName(), pk);
    }

    findBy(key: any): Promise<MODEL[]> {
        return DbUtils.getInstance().get(this.getTableName(), key);
    }

     update(model: MODEL): Promise<MODEL> {
        let pk: any = {};
        for (let key in this.getPk()) {
            if (!model[this.getPk()[key]]) {
                return Promise.reject({ error: `PK(${this.getPk()}) ${this.getPk()[key]} is empty` });
            }
            pk[key] = model[key];
        }
        return DbUtils.getInstance().update(this.getTableName(), model, pk);
    }

     delete(pk: any): Promise<void> {
        for (let key in this.getPk()) {
            if (!pk[this.getPk()[key]]) {
                return Promise.reject({ error: `PK(${this.getPk()}) ${this.getPk()[key]} is empty` });
            }
        }
        return DbUtils.getInstance().delete(this.getTableName(), pk);
    }
}


export default BaseDaoImpl;
