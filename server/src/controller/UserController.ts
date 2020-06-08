import * as express from 'express'
import User from '../models/User'
import { v4 as uuid } from 'uuid';
import cors from 'cors'

class UserController {

    constructor(router: express.Router) {

        const users = new Map<string, User>();
        users['forsrc'] = { username: "forsrc", role: ['ROLE_USER', 'ROLE_ADMIN']};
        users['user'] = { username: "user", role: ['ROLE_USER', 'ROLE_DEV']};

        router.get('/', (req: express.Request, res: express.Response) => {
            res.json({
                message: `Nothing to see here, [url]/user instead.`
            })
        })

        router.get('/user', cors(), (req: express.Request, res: express.Response) => {
            res.json({
                users
            })
        })


        router.post('/user', cors(), (req: express.Request, res: express.Response) => {
            try {
                let user: User = {} as User;
                Object.assign(user, req.body)
                const newUUID = uuid();
                users[newUUID] = user;
                res.json({
                    uuid: newUUID
                })
            } catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        })


        router.get('/user/:id', cors(), (req: express.Request, res: express.Response) => {
            if (!!users[req.params.id]) {
                res.json({
                    user: users[req.params.id]
                })
            } else {
                res.status(404).send(JSON.stringify({ "error": "no such cat" }));
            }
        })


        router.put('/user/:id', cors(), (req: express.Request, res: express.Response) => {
            try {
                if (!!users[req.params.id]) {
                    let user: User = {} as User;
                    Object.assign(user, req.body)
                    users[req.params.id] = user;
                    res.json({
                        cat: users[req.params.id]
                    })
                } else {
                    res.status(404).send(JSON.stringify({ "error": "no such cat" }));
                }
            } catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        })


        router.delete('/user/:id', cors(), (req: express.Request, res: express.Response) => {
            if (!!users[req.params.id]) {
                delete users[req.params.id]
                res.json({
                    uuid: req.params.id
                })
            } else {
                res.status(404).send(JSON.stringify({ "error": "no such cat" }));
            }
        });

    }
}

export default UserController;