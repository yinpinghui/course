import * as cluster from "cluster";
import * as mkdirp from "mkdirp";
import * as path from "path";
import {config} from "../config";
import {transports, Logger} from "winston";
import {Request, Response} from "express";

export const logger = new Logger({
  transports: [
    //new transports.File(config.file),
    new transports.Console(config.console)
  ],
  exitOnError: false
});

export const skip = (req: Request, res: Response): boolean => {
  return res.statusCode >= 200;
};

export const stream = {
  write: (message: string, encoding: string): void => {
    logger.info(message);
  }
};
