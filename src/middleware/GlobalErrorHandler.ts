import {Middleware, ExpressErrorMiddlewareInterface} from "routing-controllers";

@Middleware({ type: "after" })
export class GlobalErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next: (err: any) => any) {
        let errorMsg = {}
        if(error.httpCode != null ){
           errorMsg =  {
              errorCode:error.httpCode,
              errorMsg:error.message,
              status:error.httpCode
            }
        }
        if(error.errorCode != null){
            //业务异常，status:901
            errorMsg =  {
              errorCode:error.errorCode,
              errorMsg:error.errorMsg,
              status:"901"
            }
        }

        response.json(errorMsg);
    }

}