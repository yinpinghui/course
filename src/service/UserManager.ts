import {Container, Inject, Service} from "typedi";
import {client,sequelize} from "../db"
import {User} from "../model/User"
export class UserManager {
    create() {

    }
    getUserById(){

    }
    async getUsers(){
        let result : User[] = await User.findAll<User>({ raw: true})
        console.log(result)
        return result;        
    }
}
