import * as express from 'express';

export function IndexMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(`${req.path}`);
    // console.log(require.resolve(`client/build${req.path}`));
    // if (req.path === '/') {
        
    // }
    // express.static(require.resolve(`client/build${req.path}`));
    next();
}