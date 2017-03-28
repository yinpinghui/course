import {ErrorMiddlewareInterface, MiddlewareGlobalAfter} from "routing-controllers";

@MiddlewareGlobalAfter()
export class MyErrorHandler implements ErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next?: Function) {
        console.log("this is global error, do something...",error);
        next();
    }

}