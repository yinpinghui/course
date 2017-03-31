import {Request} from "express";
import {getConnectionManager, Repository,EntityManager} from "typeorm";
import {Get, Post, Put, Patch, Delete,Req,JsonController} from "routing-controllers";
import {User} from '../models/User'
import {Course} from '../models/Course'

@JsonController()
export class UserController {

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
        .leftJoinAndSelect("c.author",'author')
        .leftJoinAndSelect("p.attenances",'attenances')
            
        
        return result;
    }


}