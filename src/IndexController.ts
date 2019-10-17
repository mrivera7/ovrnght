import * as path from 'path';
import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';

dotenv.config();

@Controller('/')
export class IndexController {
    
    @Get()
    get(req: Request, res: Response): any {
        // console.log(req.params.id);
        // return res.status(200).json({ msg: 'get_called' });
        
        const rootDir: string = (process.env.ROOT_DIR as string);
        // console.log(rootDir);
        // console.log(__dirname);
        return res.sendFile(path.resolve(rootDir, "calculator/build/index.html"));

        // return res.sendFile(/** What do I put in here? */);

    }

}