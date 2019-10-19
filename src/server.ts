import * as path from 'path';
import * as express from 'express';
// import * as serveIndex from 'serve-index';
import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { IndexController } from './controllers/IndexController';

const calcRoot: string = path.resolve(__dirname, "../packages/calculator/build");

export class SampleServer extends Server {
    constructor() {
        super();
        
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(calcRoot));

        let indexController = new IndexController();

        super.addControllers([ indexController ]);
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server listening on port: ${ port }`);
        });
    }
}