import BaseService from './BaseService';

import BaseDao from '../dao/BaseDao';


abstract class BaseServiceImpl<PK, MODEL> implements BaseService<PK, MODEL> {

    baseDao: BaseDao<PK, MODEL>;

    constructor(baseDao: BaseDao<PK, MODEL>) {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.baseDao = baseDao;
    }

    async list(): Promise<Array<MODEL>> {
        return await this.baseDao.list();
    }

    async save(model: MODEL): Promise<PK> {
        return await this.baseDao.save(model);
    }

    async get(pk: PK): Promise<MODEL> {
        return this.baseDao.get(pk);
    }

    async update(pk: PK, model: MODEL): Promise<MODEL> {
        return this.baseDao.update(pk, model);
    }

    delete(pk: PK): Promise<void> {
        return this.baseDao.delete(pk);
    }
}


export default BaseServiceImpl;