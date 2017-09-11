import * as bodyParser from "body-parser";
import {Middleware , ExpressMiddlewareInterface} from "routing-controllers";

@Middleware({ type: "before" })
export class Urlencoder implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: (err?: any) => any): any {
        console.log('into body parser url encoder')
        bodyParser.urlencoded({ extended: false })(request,response,next)
    }

}
