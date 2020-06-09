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

    list(): Array<MODEL> {
        return this.baseDao.list();
    }

    save(pk: PK, model: MODEL): MODEL {
        return this.baseDao.save(pk, model);
    }

    get(pk: PK): MODEL {
        return this.baseDao.get(pk);
    }

    update(pk: PK, model: MODEL): MODEL {
        return this.baseDao.update(pk, model);
    }

    delete(pk: PK): void {
        this.baseDao.delete(pk);
    }
}


export default BaseServiceImpl;