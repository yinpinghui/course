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
    async mycreateCourses(@QueryParam("idx") idx=0,@QueryParam("size") size=10) {
        //倒序
        let result = await this.courseManager.getMycreateCourses(idx,size)
        return result;
    }
    @Get("/api/course/myCourses")
    async myCourses(@QueryParam("idx") idx=0,@QueryParam("size") size=10) {    
        //倒序
        let result = await this.courseManager.getMyCourses(idx,size)
        return result;
    }

    @Post("/api/course")
    async create(@Req() req: Request){
        let course = req.body
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
}