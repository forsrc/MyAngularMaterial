interface BaseDao<PK, MODEL> {

    getTableName(): string;

    list(): Promise<Array<MODEL>>;

    save(model: MODEL): Promise<PK>;

    get(pk: PK): Promise<MODEL>;

    update(pk: PK, model: MODEL): Promise<MODEL>;

    delete(pk: PK): Promise<void>;
}


export default BaseDao;