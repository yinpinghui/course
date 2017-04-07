/// <reference path="../typings/main.d.ts" />
import "reflect-metadata";
import * as express from "express";
import {createExpressServer,useExpressServer} from "routing-controllers";
import {createConnection, useContainer} from "typeorm";
import './globalMiddleWare/ConvertUidMiddleware' //global middleware
import "./globalMiddleWare/MyErrorHandler"; 
import {Container} from "typedi";
import config from './config';
import {UserManager} from   './services/UserManager';


// its important to set container before any operation you do with routing-controllers,
// including importing controllers
useContainer(Container);
/**
 * 我们可以用middleware，errorhandler等在这个app.ts里面进行注册
 */ 

createConnection({
    driver : config.driver,
    entities : [
        __dirname + "/models/*{.js,.ts}"
    ],
    autoSchemaSync : true
}).then(async connection =>{
    
    const app = express()
    useExpressServer(app,{
        controllers: [__dirname + "/controllers/**/*{.js,.ts}"]
        //middlewares: [__dirname + "/middlewares/**/*{.js,.ts}"]
    });
    app.listen(3001);
    console.log("express server is running on port 3001. Open http://localhost:3001/blogs/");
}).catch(error => console.log(error));

