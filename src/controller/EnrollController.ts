import {Request} from "express";
import {Get, Post, Put, Patch, Delete} from "routing-controllers";
import {Req,Body,Param} from "routing-controllers";
import {JsonController ,Controller} from "routing-controllers";
import {Container, Inject, Service} from "typedi";
import {EnrollManager} from "../service/EnrollManager";
import {Enroll} from "../model/Enroll"


@Controller()
@Service()
export class EnrollController {

    @Inject()
    enrollManager : EnrollManager;

    @Get("/api/enrolls")
    async getAll(@Req() request: Request) {
        let result = await this.enrollManager.getEnrolls()
        return result;
    }
    @Post("/api/enroll/create")
    async create(@Req() req: any){
        let enroll = req.body
        let user = req.user;
        enroll.creator_id= user.id
        const _enroll = new Enroll(enroll)
        let  result = await _enroll.save();
        return result.toJSON();
    }
    @Post("/api/enroll/:id")
    async update(@Param("id") id: number, @Body() enroll: any) {
       
    }
}