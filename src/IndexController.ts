import * as path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';

const calcRoot: string = path.resolve(__dirname, "../../calculator/build");

@Controller('/')
export class IndexController {
    
    @Get('')
    get(req: Request, res: Response): any {
        // console.log(req.params.id);
        // return res.status(200).json({ msg: 'get_called' });
        
        return res.sendFile(path.join(calcRoot, "index.html"));
    }

    /**
    @Get('static/css/*')
    private Get(req: Request, res: Response): any {
        console.log(req.baseUrl);
        return res.sendFile(path.join(calcRoot, req.baseUrl));
    }
    */
}