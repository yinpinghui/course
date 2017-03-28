import {Request, Response, Router} from "express";
import {User} from "../models/User"
export default function controller(router){
    router.get("/users", (req: Request, res: Response) => {
        //const user = new User({name: 'bob', age: 99});
        //user.save();
        User.findAll().then(users =>{
            res.json(users);
        })

    });
    router.get("/user/:id", (req: Request, res: Response) => {
        //const user = new User({name: 'bob', age: 99});
        //user.save();
        User.findAll().then(users =>{
            res.json(users);
        })

    });
    router.post("/user",(req: Request, res : Response) =>{
        User.create<User>({fullname: 'nelly'}).then(user=>{
            res.json(user);
        })
    })
}


