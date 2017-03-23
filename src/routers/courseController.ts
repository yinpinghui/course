import {Request, Response, Router} from "express";

export default function controller(router){
    router.get("/course", (req: Request, res: Response) => {
        res.end("hello api")
    });
}


