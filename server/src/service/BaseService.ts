

interface BaseService<MODEL> {


    list(): Promise<MODEL[]>;

    save(model: MODEL): Promise<MODEL>;

    get(pk: any): Promise<MODEL[]>;

    update(model: MODEL): Promise<MODEL>;

    delete(pk: any): Promise<void>;
}


export default BaseService;
