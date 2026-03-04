import type { Request, Response } from "express";
export type AsyncControllerFn = (req: Request, resp: Response) => Promise<void>;