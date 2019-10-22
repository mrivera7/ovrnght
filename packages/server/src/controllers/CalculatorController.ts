import * as path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';

// import { CalculatorMiddleware } from '../middleware/CalculatorMiddleware';

@Controller('calculator')
export class CalculatorController {
    
    @Get()
    // @Middleware([ CalculatorMiddleware ])
    get(req: Request, res: Response): any {
        return res.format({
            'text/html': res.sendFile(require('calculator/build/index.html'))
        });
    }

    @Get('static/css/*')
    css(req: Request, res: Response): any {
        return res.format({
            'text/css': res.sendFile(require('calculator/build/static/css/main.*.chunk.js'))
        });
    }

}