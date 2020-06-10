import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

import config from '../Config';
import BaseDao from './BaseDao';
import DbUtils from '../utils/DbUtils';
import { async } from 'q';


abstract class BaseDaoImpl<PK, MODEL> implements BaseDao<PK, MODEL> {


    public db: sqlite.Database = new sqlite3.Database(config.db, () => { });

    constructor() {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public abstract getTableName(): string;

    async list(): Promise<Array<MODEL>> {
        let sql: string = `SELECT * from ${this.getTableName()}`;

        return await DbUtils.getInstance().all(sql, []);
    }

    async save(model: MODEL): Promise<PK> {
        let sql: string = `SELECT * from ${this.getTableName()}`;

        return await DbUtils.getInstance().insert(this.getTableName(), model);
    }

    async get(pk: PK): Promise<MODEL> {
        return await DbUtils.getInstance().get(this.getTableName(), pk);
    }

    async update(pk: PK, model: MODEL): Promise<MODEL> {
        return await DbUtils.getInstance().update(this.getTableName(), model, pk);
    }

    async delete(pk: PK): Promise<void> {
        return await DbUtils.getInstance().delete(this.getTableName(), pk);
    }
}


export default BaseDaoImpl;