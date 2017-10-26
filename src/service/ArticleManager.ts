import {Container, Inject, Service} from "typedi";
import {client,sequelize} from "../db"
import {Article} from "../model/Article"
export class ArticleManager {
    
    getActivityById(){

    }
    async getActivities(){
        let result : Article[] = await Article.findAll<Article>()
        console.log(result)
        return result;        
    }
}
