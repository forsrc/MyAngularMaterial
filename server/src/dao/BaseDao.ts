interface BaseDao<MODEL> {

    getTableName(): string;

    list(): Promise<MODEL[]>;

    save(model: MODEL): Promise<MODEL>;

    get(pk: any): Promise<MODEL[]>;
  
    findBy(key: any): Promise<MODEL[]>;

    update(model: MODEL): Promise<MODEL>;

    delete(pk: any): Promise<void>;

    count(where: any): Promise<number>;

    getTableName(): string;

    getPk(): string[];
}


export default BaseDao;
