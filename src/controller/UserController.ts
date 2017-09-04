import {Request} from "express";
import {Get, Post, Put, Patch, Delete} from "routing-controllers";
import {Req} from "routing-controllers";
import {JsonController ,Controller} from "routing-controllers";
import {Container, Inject, Service} from "typedi";
import {UserManager} from "../service/UserManager";


@Controller()
@Service()
export class UserController {

    @Inject()
    userManager : UserManager;

    @Get("/users")
    async getAll(@Req() request: Request) {
        let result = await this.userManager.getUsers()
        return result;
    }
}