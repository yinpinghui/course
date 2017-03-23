import {Request, Response, Router} from "express";

export default function controller(router){
    router.get("/order", (req: Request, res: Response) => {
        res.end("hello order")
    });
}


