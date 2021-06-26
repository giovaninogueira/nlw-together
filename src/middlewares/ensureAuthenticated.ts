import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    req: Request, 
    resp: Response, 
    next: NextFunction
) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return resp.status(401).end();
    }

    const [,token] = authToken.split(" ");

    try {
        const { sub } = verify(
            token, 
            '12e0a9b5d7a8a534208dfa04ea4e9d47'
        ) as IPayload;
        req.user_id = sub;
        return next();
    } catch (err) {
        return resp.status(401).end();
    }
}