import {MiddlewareGlobalBefore, MiddlewareInterface} from "routing-controllers";
import {getConnectionManager, Repository,EntityManager} from "typeorm";
import {UserManager} from '../services/UserManager';
import {User} from '../models/User'
import {Container, Service, Inject} from "typedi";
//import {AutoWired, Inject} from "typescript-ioc";


@MiddlewareGlobalBefore()
export class ConvertUidMiddleware implements MiddlewareInterface {
    @Inject("userManager")
    private userManager : UserManager;  
    constructor(){
        this.userManager = Container.get(UserManager);
    }
    use(request: any, response: any, next?: Function): any {
        let uid = request.headers.uid ;        
        this.userManager.getUserById(uid).then(user =>{
            console.log("middle ware ,user is ",user)
            if(user){
                request.user = user;
                next()
            }else{
                response.status(500)
                response.json({msg:'no user'})
            }
        });
        
    }
    
}
