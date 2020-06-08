import * as express from 'express';
import cors from 'cors'
import UserController from './controller/UserController';
class Router {

    userController = new UserController();

    constructor(server: express.Express) {
        const router = express.Router()

        router.get('/', (req: express.Request, res: express.Response) => {
            res.json({
                message: `Nothing to see here, [url]/user instead.`
            })
        })


        router
            .get('/user', cors(), this.userController.list)
            .post('/user', cors(), this.userController.save)
            .get('/user/:username', cors(), this.userController.get)
            .put('/user/:username', cors(), this.userController.update)
            .delete('/user/:username', cors(), this.userController.delete)
            ;

        router.options('*', cors());

        server.use('/', router)
    }
}

export default Router;