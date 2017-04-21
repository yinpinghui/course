/// <reference path="../typings/main.d.ts" />
import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import {createExpressServer,useExpressServer} from "routing-controllers";
import {createConnection, useContainer} from "typeorm";
import './globalMiddleWare/ConvertUidMiddleware' //global middleware
import "./globalMiddleWare/MyErrorHandler"; 
import {Container} from "typedi";
import config from './config';
import {UserManager} from   './services/UserManager';

import socketio from "socket.io"


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
      //use json form parser middlware
    app.use(bodyParser.json());

    //use query string parser middlware
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    useExpressServer(app,{
        controllers: [__dirname + "/controllers/**/*{.js,.ts}"]
    });
    //此处应该是https或者http，然后借助http进行listen
    app.listen(3001);
    var io = socketio(app);
    io.on('connection', function (socket) {
        socket.on("subscribe",function(room){
            socket.join(room)
        })
        socket.on("chat_message", function(msg){
            io.emit("chat_message", msg);
        });
        socket.on("disconnect",function(){
            /**
             * 删除redis的client数据
             *
             */
        })
        
    })
    console.log("express server is running on port 3001. Open http://localhost:3001/blogs/");
}).catch(error => console.log(error));

