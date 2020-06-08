import * as express from 'express';
import cors from 'cors'
import UserController from './controller/UserController';
class Router {

    constructor(server: express.Express) {
        const router = express.Router()

        new UserController(router);

        router.options('*', cors());

        server.use('/', router)
    }
}

export default Router;