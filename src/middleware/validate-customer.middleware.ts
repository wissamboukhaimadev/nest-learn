import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomer implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('hello middlware')
        next()
    }
}