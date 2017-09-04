import {Container, Inject, Service} from "typedi";
import {client,sequelize} from "../db"
import {Enroll} from "../model/Enroll"
export class EnrollManager {
    
    async getEnrolls(){
        let result : Enroll[] = await Enroll.findAll<Enroll>()
        
        return result;        
    }
}
