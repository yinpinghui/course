import {Request} from "express";
import {Get, Post, Put, Patch, Delete} from "routing-controllers";
import {Req,Body,Param,QueryParam} from "routing-controllers";
import {JsonController ,Controller} from "routing-controllers";
import {Container, Inject, Service} from "typedi";
import {CourseManager} from "../service/CourseManager";
import {Course} from "../model/Course"
@Controller()
@Service()
export class CourseController {
    @Inject()
    courseManager : CourseManager;

    @Get("/api/course/courses")
    async getAll(@QueryParam("idx") idx=0,@QueryParam("size") size=10) {    
        let result = await this.courseManager.getCourses(idx,size)
        return result;
    }
    @Get("/api/course/mycreateCourses")
    async mycreateCourses(@Req() req: any,@QueryParam("idx") idx=0,@QueryParam("size") size=10) {
        //倒序
        let user = req.user;
        //let result = await this.courseManager.getMycreateCourses(user.id,idx,size)
        return [];//result;
    }
    @Get("/api/course/myCourses")
    async myCourses(@Req() req: any,@QueryParam("idx") idx=0,@QueryParam("size") size=10) {    
        //倒序
        let user = req.user;
        //let result = await this.courseManager.getMyCourses(user.id,idx,size)
        return []//result;
    }

    @Post("/api/course")
    async create(@Req() req: any){
        let course = req.body
        //console.log('course is ', course)
        let user = req.user;
        //console.log(user)
        course.creator_id= user.id
        //console.log(course)
        const _course = new Course(course)
        let  result = await _course.save();
        return result.toJSON();
    }
    @Post("/api/course/:id")
    async update(@Req() req: Request,@Param("id") id: number) {
        let course = req.body
        const _course = new Course(course)
        let  result = await _course.save();
        return result.toJSON();
    }
    @Get("/api/course/:id")
    async info(@Req() req: Request,@Param("id") id: number) {
        let  result = await this.courseManager.getCourseById(id)
        return result;
    }
}