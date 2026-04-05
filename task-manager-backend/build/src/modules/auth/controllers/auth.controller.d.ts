import { NextFunction, Request, Response } from "express";
export declare const signup: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const login: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUserProfile: (req: any, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
export declare const logout: (req: Request, res: Response) => Response<any, Record<string, any>>;
