import * as express from 'express'
import BaseController from './BaseController';
import UserService from '../service/UserService';
import User from '../model/User'
import Init from '../Init'



class UserController implements BaseController {


    private userServic: UserService = Init.userService;

    constructor() {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    list(req: express.Request, res: express.Response): void {
        this.userServic.list().then((rows) => {
            res.status(200).json(rows);
        }).catch((err) => {
            res.status(400).json({ error: err });
        });

    }


    save(req: express.Request, res: express.Response): void {
        console.log("--->", req.body)
        if (!req.body) {
            res.status(400).json({ error: "req.body is empty" });
            return;
        }
        let user: User = {} as User;
        Object.assign(user, req.body)
        console.log("---->", user)
        this.userServic.save(user).then((status) => {
            res.status(200).json({ user: user, status: status });
        }).catch((err) => {
            res.status(400).json({ error: err });
        });

    }


    get(req: express.Request, res: express.Response) {
        let username: string = req.params.username;

        this.userServic.get({ username: username }).then((one) => {
            if (one) {
                res.status(200).json({ user: one });
            } else {
                res.status(404).json({ error: `no such user '${username}'` });
            }


        }).catch((err) => {
            res.status(400).json({ "error": err });
        });

    }


    update(req: express.Request, res: express.Response) {
        if (!req.body) {
            res.status(400).json({ error: "req.body is empty" });
            return;
        }

        let user: User = {} as User;
        Object.assign(user, req.body)

        this.userServic.update({ username: user.username }, user).then((status) => {
            if (status) {
                res.status(200).json({ user: user, status: status });
            } else {
                res.status(404).json({ error: `no such user '${user.username}'` });
            }

        }).catch((err) => {
            res.status(400).json({ "error": err });
        });
    }


    delete(req: express.Request, res: express.Response) {
        let username: string = req.params.username;
        this.userServic.delete({ username: username }).then((status) => {
            res.status(200).json({ message: `'${username}' is deleted.` });
        }).catch((err) => {
            res.status(400).json({ "error": err });
        });
    }
}

//export default new UserController();
export default UserController;