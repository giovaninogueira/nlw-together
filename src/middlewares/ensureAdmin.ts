import { NextFunction, Request, Response } from "express";

export function ensureAdmin(req: Request, resp: Response, next: NextFunction) {
    // verificar se o usuário admin
    const admin = true;

    if (admin) {
        return next();
    }
    
    return resp.status(401).json({
        error: 'Unauthorized'
    });
}