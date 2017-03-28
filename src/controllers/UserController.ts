import {Request} from "express";
import {getConnectionManager, Repository,EntityManager} from "typeorm";
import {Get, Post, Put, Patch, Delete} from "routing-controllers";
import {Req} from "routing-controllers";
import {JsonController} from "routing-controllers";
import {User} from '../models/User'

@JsonController()
export class UserController {

    //private postRepository: Repository<Post>;
    //private userRepository: Repository<User>;
    private entityManager : EntityManager;
    constructor() {
        //this.userRepository = getConnectionManager().get().getRepository(User);
        this.entityManager =getConnectionManager().get().entityManager;
    }
    @Get("/blogs")
    async getAll(@Req() request: Request) {
        const result = await this.entityManager.findOne(User,{id : 83})
        return result;
    }

    @Get("/blogs/:id")
    getOne() {
        return { id: 1, name: "First blog!" };
    }

    @Post("/blogs")
    post(@Req() request: Request) {
        let blog = JSON.stringify(request.body);
        return "Blog " + blog + " !saved!";
    }

    @Put("/blogs/:id")
    put(@Req() request: Request) {
        return "Blog #" + request.params.id + " has been putted!";
    }

    @Patch("/blogs/:id")
    patch(@Req() request: Request) {
        return "Blog #" + request.params.id + " has been patched!";
    }

    @Delete("/blogs/:id")
    remove(@Req() request: Request) {
        return "Blog #" + request.params.id + " has been removed!";
    }

}