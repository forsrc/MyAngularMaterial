import * as express from 'express'
import BaseController from './BaseController';
import BaseService from '../service/BaseService';



abstract class BaseControllerImpl<MODEL> implements BaseController<MODEL>{


    private baseService: BaseService<MODEL>;

    constructor(baseService: BaseService<MODEL>) {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.baseService = baseService;
    }


    list(req: express.Request, res: express.Response): void {

        console.log(new Date().toISOString(), this.constructor.name, "list   --->");

        this.baseService.list().then((list: MODEL[]) => {
            res.status(200).json({ status: "ok", data: list, total:  list.length});
        }).catch((err) => {
            res.status(400).json({ status: "ng", error: err });
        });

    }


    save(req: express.Request, res: express.Response): void {
        if (!req.body) {
            res.status(400).json({ status: "ng", error: "req.body is empty" });
            return;
        }
        let model: MODEL = {} as MODEL;
        Object.assign(model, req.body);

        console.log(new Date().toISOString(), this.constructor.name, "save   --->", model);

        this.baseService.save(model).then((info) => {

            res.status(200).json({ status: "ok", message: info });
        }).catch((err) => {
            res.status(400).json({ status: "ng", error: err });
        });

    }


    get(req: express.Request, res: express.Response) {

        let model: MODEL = {} as MODEL;
        Object.assign(model, req.params);

        console.log(new Date().toISOString(), this.constructor.name, "get    --->", model);

        this.baseService.get(model).then((list: MODEL[]) => {
            if (list && list.length > 0) {
                res.status(200).json({ status: "ok", data: list , total:  list.length});
            } else {
                res.status(404).json({ status: "ng", error: `no such '${JSON.stringify(model)}'` });
            }


        }).catch((err) => {
            res.status(400).json({ status: "ng", "error": err });
        });

    }


    update(req: express.Request, res: express.Response) {
        if (!req.body) {
            res.status(400).json({ status: "ng", error: "req.body is empty" });
            return;
        }

        let model: MODEL = {} as MODEL;
        Object.assign(model, req.body);

        console.log(new Date().toISOString(), this.constructor.name, "update --->", model);

        this.baseService.update(model).then((info) => {
            if (info) {
                res.status(200).json({ status: "ok", message: info });
            } else {
                res.status(404).json({ status: "ng", error: `no such '${JSON.stringify(model)}'` });
            }

        }).catch((err) => {
            res.status(400).json({ status: "ng", "error": err });
        });
    }


    delete(req: express.Request, res: express.Response) {

        let model: MODEL = {} as MODEL;
        Object.assign(model, req.params);

        console.log(new Date().toISOString(), this.constructor.name, "delete --->", model);

        this.baseService.delete(model).then((status) => {
            res.status(200).json({ status: "ok", message: `'${JSON.stringify(model)}' is deleted.` });
        }).catch((err) => {
            res.status(400).json({ status: "ng", "error": err });
        });
    }
}

export default BaseControllerImpl;
