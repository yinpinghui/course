import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey, Length,CreatedAt,UpdatedAt,DeletedAt,DataType} from 'sequelize-typescript';
import * as moment from "moment"
export class BaseModel extends Model<BaseModel>{


    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
            
    @DeletedAt
    deleted_at: Date;

    toJSON(){
        let values = Object.assign({}, this.get());
        Object.keys(values).forEach((key,i)=>{
            if(values[key] !=null && typeof values[key] == "object"){
                let date:Date = new Date(values[key])
                console.log(typeof date,date,date.toDateString())
                if(typeof date == "object" && "Invalid Date" != date.toDateString()){
                    values[key] = moment(date).format("YYYY-MM-DD HH:mm:ss");
                }
            }
        })
        return values;
    }
}