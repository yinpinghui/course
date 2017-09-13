import {Request} from "express";
import {Get, Post, Put, Patch, Delete} from "routing-controllers";
import {Req,Body,Param} from "routing-controllers";
import {JsonController ,Controller} from "routing-controllers";
import {Container, Inject, Service} from "typedi";
import {ActivityManager} from "../service/ActivityManager";
import {Enroll} from "../model/Enroll"
import {Activity} from "../model/Activity"


@Controller()
@Service()
export class ActivityController {

    @Inject()
    activityManager : ActivityManager;

    @Get("/api/activities")
    async getAll(@Req() request: Request) {
        let result = await this.activityManager.getActivities()
        return result;
    }
    @Post("/api/activity")
    async create(@Req() req: any){
        let activity = req.body
        //let parentId = req.body.parentId;
        //let parentType = req.body.parentType
        let user = req.user;
        activity.creator_id= user.id
        const _activity = new Activity(activity)
        let  result = await _activity.save();
        return result.toJSON();
    }
    @Post("/api/activity/:id")
    async update(@Param("id") id: number, @Body() activity: any) {
       return "Updating a user...";
    }
    @Get("/api/activity/info/:id")
    async info(@Param("id") id: number) {
       return "Updating a user...";
    }
    @Post("/api/activity/:id/openenroll")
    async openenroll (@Param("id") id : number){
        
        return 
    }
}