import BaseService from './BaseService';

import BaseDao from '../dao/BaseDao';



abstract class BaseServiceImpl<MODEL> implements BaseService<MODEL> {

    baseDao: BaseDao<MODEL>;

    constructor(baseDao: BaseDao<MODEL>) {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.findBy = this.findBy.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.baseDao = baseDao;
    }

    list(): Promise<MODEL[]> {
        return this.baseDao.list();
    }

    save(model: MODEL): Promise<MODEL> {
        return  this.baseDao.save(model);
    }

    get(pk: any): Promise<MODEL[]> {
        return this.baseDao.get(pk);
    }

    findBy(pk: any): Promise<MODEL[]> {
        return this.baseDao.findBy(pk);
    }

    update(model: MODEL): Promise<MODEL> {
        return this.baseDao.update(model);
    }

    delete(pk: any): Promise<void> {
        return this.baseDao.delete(pk);
    }
}


export default BaseServiceImpl;
