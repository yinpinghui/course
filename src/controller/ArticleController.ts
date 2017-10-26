import {Request} from "express";
import {Get, Post, Put, Patch, Delete} from "routing-controllers";
import {Req,Body,Param,QueryParam} from "routing-controllers";
import {JsonController ,Controller} from "routing-controllers";
import {Container, Inject, Service} from "typedi";
import {CourseManager} from "../service/CourseManager";
import {Course} from "../model/Course"
import {ArticleManager} from "../service/ArticleManager";
import {Article} from "../model/Article"
@Controller()
@Service()
export class CourseController {
    @Inject()
    articleManager : ArticleManager;

    
    @Get("/api/articles")
    async getAll(@Req() request: Request) {
        let result = await this.articleManager.getActivities()
        return result;
    }
    @Post("/api/article")
    async create(@Req() req: any){
        let article = req.body
        let user = req.user;
        article.creator_id= user.id
        const _article = new Article(article)
        let  result = await _article.save();
        return result.toJSON();
    }
    @Post("/api/article/:id")
    async update(@Param("id") id: number, @Body() article: any) {
       return "Updating a user...";
    }
    @Get("/api/article/info/:id")
    async info(@Param("id") id: number) {
       return "Updating a user...";
    }
    @Post("/api/article/:id/openenroll")
    async openenroll (@Param("id") id : number){
        
        return 
    }
}