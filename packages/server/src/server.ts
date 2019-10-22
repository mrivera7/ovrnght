import * as path from 'path';
import serveStatic from 'serve-static';
import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';

import { IndexController } from './controllers/IndexController';

export class SampleServer extends Server {
    constructor() {
        super();
        
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(serveStatic(path.join(path.dirname(require.resolve('client/package.json')), 'build')));
        this.app.use('/calculator', serveStatic(path.join(path.dirname(require.resolve('calculator/package.json')), 'build')));

        let indexController = new IndexController();

        super.addControllers([ indexController ]);
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server listening on port: ${ port }`);
        });
    }
}