import * as express from 'express'



interface BaseController<MODEL> {

    list(req: express.Request, res: express.Response): void;

    save(req: express.Request, res: express.Response): void;

    get(req: express.Request, res: express.Response): void;

    findBy(req: express.Request, res: express.Response): void;

    update(req: express.Request, res: express.Response): void;

    delete(req: express.Request, res: express.Response): void
}


export default BaseController;