import {Container, Inject, Service} from "typedi";
import {client,sequelize} from "../db"
import {Course} from "../model/Course"
export class CourseManager {
    
    async getCourseById( id : number){
        let result : Course = await Course.findOne<Course>({where: {id:id}})
        return result;
    }
    async getCourses(idx:number, size :number){
        let result : any= await Course.findAndCountAll({ offset: idx * size, limit: size,raw:true})
        //console.log(result)
        return result;
    }
    async getMyCourses(idx:number, size :number){
        let result : any= await Course.findAndCountAll({ offset: idx * size, limit: size,raw:true})
        //console.log(result)
        return result;
    }
    async getMycreateCourses(idx:number, size :number){
        let result : any= await Course.findAndCountAll({ offset: idx * size, limit: size,raw:true})
        //console.log(result)
        return result;
    }

}
