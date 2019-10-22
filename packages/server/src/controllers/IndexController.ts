import * as path from 'path';
import { Request, Response } from 'express';
import { Controller, Get, Children } from '@overnightjs/core';

import { CalculatorController } from './CalculatorController';

@Controller('')
@Children([
    new CalculatorController(),
])
export class IndexController {
    
    @Get()
    get(req: Request, res: Response): any {
        return res.sendFile(path.join(path.dirname(require.resolve('client/package.json')), 'build/index.html'));
    }

}