import * as express from 'express'
import BaseController from './BaseController';
import BaseService from '../service/BaseService';



abstract class BaseControllerImpl<MODEL> implements BaseController<MODEL>{


    private baseService: BaseService<MODEL>;

    constructor(baseService: BaseService<MODEL>) {
        this.list = this.list.bind(this);
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.findBy = this.findBy.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.baseService = baseService;
    }


    list(req: express.Request, res: express.Response): void {

        

        this.baseService.list().then((list: MODEL[]) => {
            console.log(new Date().toISOString(), this.constructor.name, "list", "[OK]","-->", list);
            res.status(200).json({ status: "ok", data: list, total:  list.length});
        }).catch((err) => {
            console.log(new Date().toISOString(), this.constructor.name, "list", "[NG]");
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


        this.baseService.save(model).then((info) => {
            console.log(new Date().toISOString(), this.constructor.name, "save", "[OK]","--->", model);
            res.status(200).json({ status: "ok", message: info });
        }).catch((err) => {
            console.log(new Date().toISOString(), this.constructor.name, "save", "[NG]","--->", model);
            res.status(400).json({ status: "ng", error: err });
        });

    }


    get(req: express.Request, res: express.Response) {

        let model: MODEL = {} as MODEL;
        Object.assign(model, req.params);

        

        this.baseService.get(model).then((list: MODEL[]) => {
            if (list && list.length > 0) {
                console.log(new Date().toISOString(), this.constructor.name, "get", "[OK]", "--->", model);
                res.status(200).json({ status: "ok", data: list , total:  list.length});
            } else {
                console.log(new Date().toISOString(), this.constructor.name, "get", "[NG]", "--->", model);
                res.status(404).json({ status: "ng", error: `no such '${JSON.stringify(model)}'` });
            }


        }).catch((err) => {
            console.log(new Date().toISOString(), this.constructor.name, "get", "[NG]", "--->", model);
            res.status(400).json({ status: "ng", "error": err });
        });

    }

    findBy(req: express.Request, res: express.Response) {

        let model: MODEL = {} as MODEL;
        Object.assign(model, req.params);

        

        this.baseService.findBy(model).then((list: MODEL[]) => {
            if (list && list.length > 0) {
                console.log(new Date().toISOString(), this.constructor.name, "get", "[OK]", "--->", model);
                res.status(200).json({ status: "ok", data: list , total:  list.length});
            } else {
                console.log(new Date().toISOString(), this.constructor.name, "get", "[NG]", "--->", model);
                res.status(404).json({ status: "ng", error: `no such '${JSON.stringify(model)}'` });
            }


        }).catch((err) => {
            console.log(new Date().toISOString(), this.constructor.name, "get", "[NG]", "--->", model);
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


        this.baseService.update(model).then((info) => {
            if (info) {
                console.log(new Date().toISOString(), this.constructor.name, "update", "[OK]", "--->", model);
                res.status(200).json({ status: "ok", message: info });
            } else {
                console.log(new Date().toISOString(), this.constructor.name, "update", "[NG]", "--->", model);
                res.status(404).json({ status: "ng", error: `no such '${JSON.stringify(model)}'` });
            }

        }).catch((err) => {
            console.log(new Date().toISOString(), this.constructor.name, "update", "[NG]", "--->", model);
            res.status(400).json({ status: "ng", "error": err });
        });
    }


    delete(req: express.Request, res: express.Response) {

        let model: MODEL = {} as MODEL;
        Object.assign(model, req.params);

        this.baseService.delete(model).then((status) => {
            console.log(new Date().toISOString(), this.constructor.name, "delete", "[OK]", "--->", model);
            res.status(200).json({ status: "ok", message: `'${JSON.stringify(model)}' is deleted.` });
        }).catch((err) => {
            console.log(new Date().toISOString(), this.constructor.name, "delete", "[NG]", "--->", model);
            res.status(400).json({ status: "ng", "error": err });
        });
    }
}

export default BaseControllerImpl;
