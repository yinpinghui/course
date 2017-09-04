import {Container, Inject, Service} from "typedi";
import {client,sequelize} from "../db"
import {Activity} from "../model/Activity"
export class ActivityManager {
    
    getActivityById(){

    }
    async getActivities(){
        let result : Activity[] = await Activity.findAll<Activity>()
        console.log(result)
        return result;        
    }
}
