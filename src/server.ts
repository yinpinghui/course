/// <reference path="../typings/main.d.ts" />
import * as bodyParser from "body-parser";
import * as cluster from "cluster";
import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as http from "http";
import * as morgan from "morgan";
import * as os from "os";
import * as path from "path";
import {config} from "./config";
import {logger, skip, stream} from "./utils/logger";
import {router } from "./routers";
//import {sequelize} from "./models/index";
//import * as Sequelize from 'sequelize';
import {Sequelize} from 'sequelize-typescript';
import {Express, Request, Response} from "express";
import {Worker} from "cluster";

interface ServerAddress {
  address: string;
  port: number;
  addressType: string;
}

class Server {
  private _app: Express;
  private _server: http.Server;

  constructor() {
    this._app = express();
    this._app.use(compression());
    this._app.use(bodyParser.json());
    this._app.use(cookieParser());
    this._app.use(express.static(path.join(__dirname, "./public")));
    this._app.use(morgan("combined", {skip: skip, stream: <any>stream}));
    this._app.use((error: Error, req: Request, res: Response, next: Function) => {
      if (error) {
        res.status(400).send(error);
      }
    });
    this._app.use("/api", router);
    this._server = http.createServer(this._app);
  }

  private _onError(error: NodeJS.ErrnoException): void {
    if (error.syscall) {
      throw error;
    }

    let port = config.getServerConfig().port;
    let bind = `Port ${port}`;

    switch (error.code) {
      case "EACCES":
        logger.error(`[EACCES] ${bind} requires elevated privileges.`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        logger.error(`[EADDRINUSE] ${bind} is already in use.`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  private _onListening(): void {
    let address = this._server.address();
    let bind = `port ${address.port}`;
    
    logger.info(`Listening on ${bind}.`);
  };

  start(): void {
    if (cluster.isMaster && config.isCluster) {
      var sequelize = new Sequelize({
          name : config['database'],
          dialect: 'mysql',
          username: config['username'],
          password: config['password'],
          modelPaths :[__dirname + '/models']
      });
      sequelize.sync().then(() => {
        logger.info("Database synced.");

        for (let c = 0; c < os.cpus().length; c++) {
          cluster.fork();
        }

        cluster.on("exit", (worker: Worker, code: number, signal: string) => {
          logger.info(`Worker ${worker.process.pid} died.`);
        });

        cluster.on("listening", (worker: Worker, address: ServerAddress) => {
          logger.info(`Worker ${worker.process.pid} connected to port ${address.port}.`);
        });
      }).catch((error: Error) => {
        logger.error(error.message);
      });
    } else {
      this._server.listen(3000);

      this._server.on("error", error => this._onError(error));
      this._server.on("listening", () => this._onListening());
    }
  }

  stop(): void {
    this._server.close();
    process.exit(0);
  }
}

let server = new Server();
server.start();
process.on("SIGINT", () => {
  //临死之前可以做一些挣扎，比如忽略，比如想外接发请求，通知外界
  //关于process SIGINT的介绍可以自行baidu
  //http://javascript.ruanyifeng.com/nodejs/process.html

  /*
  process.stdin.resume();

  process.on('SIGINT', function() {
    console.log('SIGINT信号，按Control-D退出');
  });
  */
  server.stop();
});
