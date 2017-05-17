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
import * as  socketio from "socket.io"
import iocontroller from './iocontrollers'
import * as http from 'http';
import * as https from "https";
import * as fs from "fs";
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
    if(process.env.NODE_ENV === 'development'){
        let https = require("https")
        let privateKey  = fs.readFileSync('ssl/dev.yunxiaoxin.com.key', 'utf8');
        let certificate = fs.readFileSync('ssl/dev.yunxiaoxin.com.pem', 'utf8');
        let credentials = {key: privateKey, cert: certificate};
        let httpsServer = https.createServer(credentials, app);
        httpsServer.listen(config.https.port);
    }else{
        let server = http.createServer(app);
        let io = socketio(server);
        iocontroller(io)
        server.listen(config.http.port);
    }
    
}).catch(error => console.log(error));

