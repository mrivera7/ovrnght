import * as express from 'express';

export function CalculatorMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    express.static(require.resolve('calculator/build'));
    next();
}