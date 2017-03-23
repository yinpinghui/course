import {Request, Response, Router} from "express";

export default function controller(router){
    router.get("/enroller", (req: Request, res: Response) => {
        res.end("hello api")
    });
}


