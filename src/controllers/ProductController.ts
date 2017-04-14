import {Request} from "express";
import {getConnectionManager, Repository,EntityManager} from "typeorm";
import {Get, Post, Put, Patch, Delete,Req,Param,JsonController,Body,Controller,JsonResponse} from "routing-controllers";
import {User} from '../models/User'
import {Course} from '../models/Course'
import {Product} from '../models/Product'

@Controller()
export class ProductController {

    private entityManager : EntityManager;
    private productRepository : Repository<Product>
    constructor() {
        this.entityManager =getConnectionManager().get().entityManager;
        this.productRepository = getConnectionManager().get().getRepository(Product);
    }
    
    @Get("/api/product/:no")
    @JsonResponse()
    async getProductByNo(@Param("no") no: string) {
        const result = await this.entityManager.findOne(Product,{ProductNo :no})        
        return result
    }

    @Post("/api/product")
    @JsonResponse()
    async createProduct(@Body() product: Product) {
        const result = await this.entityManager.persist(product)        
        return result
    }
    
    @Post("/api/product/:no/addUserDesc")
    @JsonResponse()
    async addProductUserDesc(@Req()  req : Request,@Param("no") no: string) {
        const product = await this.entityManager.findOne(Product,{ProductNo :no}) 
        console.log(product.desc)
        let userdesc : string = product.userdesc;
        let obj = JSON.parse(userdesc);
        obj.push({poi : "", url:""})
        product.status = 0;
        await this.entityManager.persist(product);
        return product;
    }
}