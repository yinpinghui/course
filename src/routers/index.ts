import {Request, Response, Router} from "express";
const router = Router();
let r:Array<String> = ['orderController','chatController','courseController','enrollController'];
r.map((cc)=>{
    require(`./${cc}`).default(router)
})
router.get("/", (req: Request, res: Response) => {
        res.end("hello api")
});
export {router}

