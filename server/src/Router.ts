import * as express from 'express';
import cors from 'cors'
import Init from './Init';


class Router {

    userController = Init.userController;
    userRoleController = Init.userRoleController;

    constructor(app: express.Express) {
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
            .put('/user', cors(), this.userController.update)
            .delete('/user/:username', cors(), this.userController.delete)
            ;

        router
            .get('/role', cors(), this.userRoleController.list)
            .post('/role', cors(), this.userRoleController.save)
            .get('/role/:username', cors(), this.userRoleController.get)
            .put('/role/:username', cors(), this.userRoleController.update)
            .delete('/role/:username', cors(), this.userRoleController.delete)
            ;

        router.options('*', cors());

        app.use('/', router);
    }
}

export default Router;