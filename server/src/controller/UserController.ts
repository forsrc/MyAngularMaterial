import * as express from 'express'
import BaseController from './BaseController';
import User from '../model/User'
import { v4 as uuid } from 'uuid';


class UserController implements BaseController {


    public users: Map<string, User>;

    constructor() {
        this.users = new Map<string, User>();
        this.users['forsrc'] = { username: "forsrc", role: ['ROLE_USER', 'ROLE_ADMIN'] };
        this.users['user'] = { username: "user", role: ['ROLE_USER', 'ROLE_DEV'] };
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    list(req: express.Request, res: express.Response): void {
        console.log(this.users);
        res.json(this.users);
    }


    save(req: express.Request, res: express.Response): void {
        try {
            let user: User = {} as User;
            Object.assign(user, req.body)
            const newUUID = uuid();
            this.users[newUUID] = user;
            res.json({
                uuid: newUUID
            })
        } catch (e) {
            res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
        }
    }


    get(req: express.Request, res: express.Response) {
        console.log(req.params.username);
        if (!!this.users[req.params.username]) {
            res.json({
                user: this.users[req.params.username]
            })
        } else {
            res.status(404).send(JSON.stringify({ "error": "no such user" }));
        }
    }


    update(req: express.Request, res: express.Response) {
        try {
            if (!!this.users[req.params.username]) {
                let user: User = {} as User;
                Object.assign(user, req.body)
                this.users[req.params.username] = user;
                res.json({
                    cat: this.users[req.params.username]
                })
            } else {
                res.status(404).send(JSON.stringify({ "error": "no such user" }));
            }
        } catch (e) {
            res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
        }
    }


    delete(req: express.Request, res: express.Response) {
        if (!!this.users[req.params.username]) {
            delete this.users[req.params.username]
            res.json({
                uuid: req.params.username
            })
        } else {
            res.status(404).send(JSON.stringify({ "error": "no such user" }));
        }
    }
}

//export default new UserController();
export default UserController;