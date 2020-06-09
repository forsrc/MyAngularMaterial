import * as express from 'express'
import BaseController from './BaseController';
import UserRole from '../model/UserRole'
import { v4 as uuid } from 'uuid';


class UserController implements BaseController {


    public userRoles: Map<string, UserRole>;

    constructor() {
        this.userRoles = new Map<string, UserRole>();
        this.userRoles['forsrc'] = { username: "forsrc", role: ['ROLE_USER', 'ROLE_ADMIN'] };
        this.userRoles['user'] = { username: "user", role: ['ROLE_USER', 'ROLE_DEV'] };
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    list(req: express.Request, res: express.Response): void {
        console.log(this.userRoles);
        res.json(this.userRoles);
    }


    save(req: express.Request, res: express.Response): void {
        try {
            let userRole: UserRole = {} as UserRole;
            Object.assign(userRole, req.body)
            const newUUID = uuid();
            this.userRoles[newUUID] = userRole;
            res.json({
                uuid: newUUID
            })
        } catch (e) {
            res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
        }
    }


    get(req: express.Request, res: express.Response) {
        console.log(req.params.username);
        if (!!this.userRoles[req.params.username]) {
            res.json({
                user: this.userRoles[req.params.username]
            })
        } else {
            res.status(404).send(JSON.stringify({ "error": "no such user" }));
        }
    }


    update(req: express.Request, res: express.Response) {
        try {
            if (!!this.userRoles[req.params.username]) {
                let userRole: UserRole = {} as UserRole;
                Object.assign(userRole, req.body)
                this.userRoles[req.params.username] = userRole;
                res.json({
                    cat: this.userRoles[req.params.username]
                })
            } else {
                res.status(404).send(JSON.stringify({ "error": "no such user" }));
            }
        } catch (e) {
            res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
        }
    }


    delete(req: express.Request, res: express.Response) {
        if (!!this.userRoles[req.params.username]) {
            delete this.userRoles[req.params.username]
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