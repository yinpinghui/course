import {Request, Response, Router} from "express";

export default function controller(router){
    router.get("/chat", (req: Request, res: Response) => {
        res.end("hello api")
    });
}


