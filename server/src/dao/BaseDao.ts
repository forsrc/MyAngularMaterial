interface BaseDao<PK, MODEL> {

    getModelName(): string;

    list(): Array<MODEL>;

    save(pk: PK, model: MODEL): MODEL;

    get(pk: PK): MODEL;

    update(pk: PK, model: MODEL): MODEL;

    delete(pk: PK): void;
}


export default BaseDao;