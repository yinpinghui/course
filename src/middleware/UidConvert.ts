import {ExpressMiddlewareInterface} from "routing-controllers";
import {client,sequelize} from "../db"
import {User} from "../model/User"
export class UidConvert implements ExpressMiddlewareInterface { // interface implementation is optional
    async use(request: any, response: any, next?: (err?: any) => any) {
        let uid = request.header("uid")
        //let user: User = await client.get("uid_" + uid)
        //console.log(user);
        
        next();
    }
}