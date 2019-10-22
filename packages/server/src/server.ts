import * as path from 'path';
import * as express from 'express';
// import * as serveIndex from 'serve-index';
import serveStatic from 'serve-static';
import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { IndexController } from './controllers/IndexController';

import { Request, Response, NextFunction } from 'express';

// const calcRoot: string = path.resolve(__dirname, "../packages/calculator/build");

export class SampleServer extends Server {
    constructor() {
        super();
        
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            console.log(req.path);
            next();
        });
        this.app.use(express.static(path.resolve(__dirname, '../../client/build')));
        this.app.use('/calculator*', serveStatic(path.resolve(__dirname, '../../calculator/build')));

        let indexController = new IndexController();

        super.addControllers([ indexController ]);
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server listening on port: ${ port }`);
        });
    }
}