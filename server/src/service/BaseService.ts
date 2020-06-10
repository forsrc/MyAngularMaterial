import BaseDao from "../dao/BaseDao";

interface BaseService<PK, MODEL> {


    list(): Promise<Array<MODEL>>;

    save(model: MODEL): Promise<PK>;

    get(pk: PK): Promise<MODEL>;

    update(pk: PK, model: MODEL): Promise<MODEL>;

    delete(pk: PK): Promise<void>;
}


export default BaseService;