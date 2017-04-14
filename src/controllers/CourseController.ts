import {Request} from "express";
import {getConnectionManager, Repository,EntityManager} from "typeorm";
import {Get, Post, Put, Patch, Delete,Req,Param,JsonController,Body,Controller,JsonResponse} from "routing-controllers";
import {User} from '../models/User'
import {Course} from '../models/Course'

//@JsonController()
@Controller()
export class CourseController {

    //private postRepository: Repository<Post>;
    //private userRepository: Repository<User>;
    private entityManager : EntityManager;
    private courseRepository : Repository<Course>
    constructor() {
        //this.userRepository = getConnectionManager().get().getRepository(User);
        this.entityManager =getConnectionManager().get().entityManager;
        this.courseRepository = getConnectionManager().get().getRepository(Course);
    }
    
    @Get("/api/me/courses")
    async getMyCourses(@Req() request: Request) {
        const result = await this.entityManager.findAndCount(Course,{
            
        })
        const qb = await this.courseRepository.createQueryBuilder("c")
        .leftJoinAndSelect("c.creator",'creators')
        .leftJoinAndSelect("c.attenances",'attenances')
            
        
        return qb.getMany();
    }
    @Post("/api/course")
    @JsonResponse()
    async saveCourses(@Req()  req : Request, @Body() course : Course) {
        console.log(course);
        let now = new Date();
        course.startTime = now;
        course.creator = req.user
        course.status = 0;
        let course2 = await this.entityManager.persist(course);
        return course2;
    }
    @Post("/api/course/:id")
    async updateCourses(@Req() request: Request) {
        const result = await this.entityManager.findAndCount(Course,{
            
        })
        const qb = await this.courseRepository.createQueryBuilder("c")
        .leftJoinAndSelect("c.author",'author')
        .leftJoinAndSelect("p.attenances",'attenances')
        return qb.getOne();
    }
    @Get("/api/course/:id")
    async courseInfo(@Req() request: Request) {
        const result = await this.entityManager.findAndCount(Course,{
            
        })
        const qb = await this.courseRepository.createQueryBuilder("c")
        .leftJoinAndSelect("c.author",'author')
        .leftJoinAndSelect("p.attenances",'attenances')
        return result;
    }


}