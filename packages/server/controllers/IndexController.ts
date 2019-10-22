import * as path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';

// import * as indexHTML from '@calc/index.html';
// <reference path="../html.d.ts" />
// import * as indexHTML from '@calc/index.html';
// <reference path="../html.d.ts" />
// import '@calc/index.html';

// const calcRoot: string = path.resolve(__dirname, "../../packages/calculator/build");

@Controller('/')
export class IndexController {
    
    @Get('')
    get(req: Request, res: Response): any {
        // console.log(__dirname);
        // return res.status(200).json({ msg: 'get_called' });
        
        // return res.sendFile(path.join(calcRoot, "index.html"));
        return res.sendFile(require('@calc/index.html'));
    }

    /**
    @Get('static/css/*')
    private Get(req: Request, res: Response): any {
        console.log(req.baseUrl);
        return res.sendFile(path.join(calcRoot, req.baseUrl));
    }
    */
}