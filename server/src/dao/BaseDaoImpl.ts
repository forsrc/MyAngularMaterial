import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

import config from '../Config';
import BaseDao from './BaseDao';
import DbUtils from '../utils/DbUtils';


abstract class BaseDaoImpl<MODEL> implements BaseDao<MODEL> {


    public db: sqlite.Database = new sqlite3.Database(config.db, () => { });

    constructor() {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public abstract getTableName(): string;

    public abstract getPk(): string[];

    async list(): Promise<MODEL[]> {
        let sql: string = `SELECT * FROM ${this.getTableName()}`;

        return await DbUtils.getInstance().all(sql, []);
    }

    async save(model: MODEL): Promise<MODEL> {

        return await DbUtils.getInstance().insert(this.getTableName(), model);
    }

    async get(pk: any): Promise<MODEL[]> {
        for (let key in this.getPk()) {
            if (!pk[this.getPk()[key]]) {
                return Promise.reject({ error: `${key} is empty` });
            }
        }
        return await DbUtils.getInstance().get(this.getTableName(), pk);
    }

    async update(model: MODEL): Promise<MODEL> {
        let pk: any = {};
        for (let key in this.getPk()) {
            if (!model[this.getPk()[key]]) {
                return Promise.reject({ error: `${key} is empty` });
            }
            pk[key] = model[key];
        }
        return await DbUtils.getInstance().update(this.getTableName(), model, pk);
    }

    async delete(pk: any): Promise<void> {
        for (let key in this.getPk()) {
            if (!pk[this.getPk()[key]]) {
                return Promise.reject({ error: `${key} is empty` });
            }
        }
        return await DbUtils.getInstance().delete(this.getTableName(), pk);
    }
}


export default BaseDaoImpl;
