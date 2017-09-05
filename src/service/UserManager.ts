import {Container, Inject, Service} from "typedi";
import {client,sequelize} from "../db"
import {User} from "../model/User"

export class UserManager {
    create() {

    }
    async getUserById(id) {
        let result = await client.getAsync("uid_" + id);

        if (!result ){
            result =  await User.findOne({where : {id : id}})
            let _r = result.toJSON();
            client.set("uid_" + id , JSON.stringify(_r))
            return _r
        }else{
            return JSON.parse(result);
        }
        
    }
    async getUsers (){
        let result : User[] = await User.findAll<User>({ raw: true})
        return result;        
    }
}
