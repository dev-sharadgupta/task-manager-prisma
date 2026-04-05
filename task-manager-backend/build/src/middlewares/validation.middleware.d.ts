import { Request, Response, NextFunction } from "express";
import { z } from "zod";
export declare function validateData(schema: z.ZodTypeAny, type?: "body" | "query" | "params"): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
