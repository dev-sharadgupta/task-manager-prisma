import type { Request, Response, NextFunction } from "express";
export declare class APIError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare const errorHandler: (err: any, _req: Request, res: Response, _next: NextFunction) => void;
