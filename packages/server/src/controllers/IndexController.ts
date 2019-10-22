import * as path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Post, Put, Delete, Children } from '@overnightjs/core';

import { CalculatorController } from './CalculatorController';

import { IndexMiddleware } from '../middleware/IndexMiddleware';

// import * as indexHTML from '@calc/index.html';
// <reference path="../html.d.ts" />
// import * as indexHTML from '@calc/index.html';
// <reference path="../html.d.ts" />
// import '@calc/index.html';

// const calcRoot: string = path.resolve(__dirname, "../../packages/calculator/build");

@Controller('')
@Children([
    new CalculatorController(),
])
export class IndexController {
    
    @Get()
    @Middleware([ IndexMiddleware ])
    get(req: Request, res: Response): any {
        return res.sendFile(require('client/build/index.html'));
    }
    // get(req: Request, res: Response): any {
        // console.log(__dirname);
        // return res.status(200).json({ msg: 'get_called' });
        // console.log(require('calculator/build/index.html'));
        // return res.sendFile(path.join(calcRoot, "index.html"));
        // return res.sendFile(require('calculator/build/index.html'));
    // }

    /**
    @Get('static/css/*')
    private Get(req: Request, res: Response): any {
        console.log(req.baseUrl);
        return res.sendFile(path.join(calcRoot, req.baseUrl));
    }
    */
}