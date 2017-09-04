import * as fs from 'fs';
import * as path from 'path';
import {Sequelize} from 'sequelize-typescript';
import config from "./libs/config.js";
import * as redis from "redis";
import * as Bluebird from "bluebird";
import * as _ from "lodash";
import {Container, Service} from "typedi";
import {User} from './model/User'

Bluebird.promisifyAll(redis);
let db = null;

const client = redis.createClient(config.redis);
console.log(__dirname + '/model')
let setting = _.extend(config.driver,{modelPaths: [
    __dirname + '/model'
]})
const sequelize = new Sequelize(setting);
export{client,sequelize}


