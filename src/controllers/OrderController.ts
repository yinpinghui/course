import {Request} from "express";
import {getConnectionManager, Repository,EntityManager} from "typeorm";
import {Get, Post, Put, Patch, Delete,Req,Param,JsonController,Body,Controller,JsonResponse} from "routing-controllers";
import {User} from '../models/User'
import {Course} from '../models/Course'
import {Product} from '../models/Product'
import {OrderHeader} from '../models/OrderHeader'
import {OrderDetail} from '../models/OrderDetail'

//@JsonController()
@Controller()
export class OrderController {
    private entityManager : EntityManager;
    private productRepository : Repository<Product>
    private orderRepository : Repository<OrderHeader>
    constructor() {
        this.entityManager =getConnectionManager().get().entityManager;
        this.productRepository = getConnectionManager().get().getRepository(Product);
        this.orderRepository = getConnectionManager().get().getRepository(OrderHeader);
    }
    @Get("/api/order/:no")
    @JsonResponse()
    async getOrderInfo(@Param("no") no: string) {
        const result = await this.entityManager.findOne(OrderHeader,{orderNo :no})        
        return result
    }

    @Post("/api/order/create")
    @JsonResponse()
    async createOrder(@Param("no") no: string) {
        const result = await this.entityManager.findOne(OrderHeader,{orderNo :no})        
        return result
    }

    @Post("/api/order/:no/")
    @JsonResponse()
    async payOrder(@Param("no") no: string) {
        const result = await this.entityManager.findOne(OrderHeader,{OrderHeader :no})        
        return result
    }

    @Post("/api/order/:no/pay/callback")
    @JsonResponse()
    async cancelOrder(@Param("no") no: string) {
        const result = await this.entityManager.findOne(OrderHeader,{OrderHeader :no})        
        return result
    }

}