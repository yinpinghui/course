import * as bodyParser from "body-parser";

import {Middleware , ExpressMiddlewareInterface} from "routing-controllers";

@Middleware({ type: "before" })
export class BodyJSON implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: (err?: any) => any): any {
        console.log('into body parser json')
        bodyParser.json()(request,response,next)
    }

}
