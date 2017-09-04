import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser"
import * as cookieParser from 'cookie-parser';
import * as logger from "morgan";
import {createExpressServer,useExpressServer,useContainer} from "routing-controllers";
import {Container} from "typedi";
import * as  socketio from "socket.io";
import * as http from 'http';
import * as https from "https";
import * as fs from "fs";
import config from "./libs/config.js";
import * as Sequelize from 'sequelize';
import {client,sequelize} from "./db"


sequelize.sync({force: false})
.then(async connection => {    
    //console.log(__dirname + "/controller/*.ts");
    //console.log("sync  done")
    useContainer(Container);
    createExpressServer({
        controllers: [__dirname + "/controller/*.ts"]
    }).listen(8080);
    console.log("Server is up and running on port 8080. Now send requests to check if everything works.");

}).catch(error => console.log("Error: ", error));






