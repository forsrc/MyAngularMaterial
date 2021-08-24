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
            .get('/user/:username', cors(), this.userController.get)
            .post('/user', cors(), this.userController.save)
            .put('/user/:username', cors(), this.userController.update)
            .delete('/user/:username', cors(), this.userController.delete)
            ;

        router
            .get('/role', cors(), this.userRoleController.list)
            .get('/role/:username/:role', cors(), this.userRoleController.get)
            .get('/role/:username', cors(), this.userRoleController.findBy)
            .post('/role', cors(), this.userRoleController.save)
            .put('/role/:username/:role', cors(), this.userRoleController.update)
            .delete('/role/:username/:role', cors(), this.userRoleController.delete)
            ;

        router.options('*', cors());

        app.use('/', router);
    }
}

export default Router;