import {Container, Inject, Service} from "typedi";
import {client,sequelize} from "../db"
import {Course} from "../model/Course"
import {User} from "../model/User"
import {Activity} from "../model/Activity"

export class CourseManager {
    async getCourseById( id : number){
        let result : Course = await Course.findOne<Course>({where: {id:id},include : [Activity]})
        return result.toJSON();
    }
    async getCourses(idx:number, size :number){
        let result : any= await Course.findAndCountAll({ offset: idx * size, limit: size,raw:true})
        //console.log(result)
        return result;
    }
    async getMyCourses(uid : any, idx:number, size :number){
        console.log(`uid is ${uid}`)
        let result : any= await Course.findAll({ offset: idx * size, limit: size,raw:true,include: [User], order: [['created_at', 'DESC']]
        ,where : {
            creator_id : uid
        }})
        console.log(result)
        return result;
    }
    async getMycreateCourses(uid :any ,idx:number, size :number){
        console.log(`uid is ${uid}`)
        let result : any= await Course.findAll({ offset: idx * size, limit: size,raw:true,include: [User], order: [['created_at', 'DESC']],  where : {
            creator_id : uid
        }})
        console.log(result)
        return result;
    }

}
