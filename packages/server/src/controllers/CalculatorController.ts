import * as path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';

@Controller('calculator')
export class CalculatorController {
    
    @Get()
    get(req: Request, res: Response): any {
        return res.sendFile(path.join(path.dirname(require.resolve('calculator/package.json')), 'build/index.html'));
    }

}