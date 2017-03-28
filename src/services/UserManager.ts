import {Container,Service} from 'typedi'
import client from "../db/redisDB"
import {getConnectionManager, Repository,EntityManager} from "typeorm";
import {User} from '../models/User'

@Service("userManager")
export class UserManager {
    private entityManager : EntityManager;
    constructor() {
        this.entityManager =getConnectionManager().get().entityManager;
    }
    async getUserById(uid:string){        
        return new Promise((resolve,reject)=>{
            client.get("uid" + uid,(err,userjson) =>{
                console.log("in redis userjson is", userjson,err)
                try{
                    let user = JSON.parse(userjson);
                    if (!!user.id) {
                        resolve(user);
                        return ;
                    }
                }catch(e){
                    //console.log("parse error ", e)
                }
                this.entityManager.findOne(User,{id : uid}).then(user=>{
                    console.log("we need find in db",user)
                    if (!!user) client.setAsync('uid' + uid,JSON.stringify(user));
                    resolve(user);
                })
            })
        })
        
    }

}