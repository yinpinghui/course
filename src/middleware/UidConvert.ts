import {Middleware,ExpressMiddlewareInterface} from "routing-controllers";
import {client,sequelize} from "../db"
import {Container, Inject, Service} from "typedi";
import {UserManager} from "../service/UserManager";
import {User} from "../model/User"

@Middleware({ type: "before" })
export class UidConvert implements ExpressMiddlewareInterface { // interface implementation is optional

    @Inject()
    userManager : UserManager;
    
    async use(request: any, response: any, next?: (err?: any) => any) {
        let uid = request.header("uid")
        let user = await this.userManager.getUserById(uid)
        request.user = user;        
        next();
    }
}