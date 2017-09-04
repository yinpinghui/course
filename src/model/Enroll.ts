import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey, Length,CreatedAt,UpdatedAt,DeletedAt,DataType} from 'sequelize-typescript';
import {Activity} from './Activity'
import * as moment from 'moment' 
import {BaseModel} from "../base/BaseModel"

@Table({
  tableName: 'base_enroll'
})
export class Enroll extends BaseModel{//extends Model<Enroll>{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

 
    @BelongsTo(() => Activity, 'activityId')
    activity : Activity;

    @Column
    startDate : Date;

    @Column 
    endDate : Date;

    @Column(DataType.INTEGER(11)) 
    maxLimit : number;

    @Column 
    fee : number;

    @Column(DataType.INTEGER(1)) 
    status : number;

    @Column(DataType.STRING)
    uids : string;

    @Column(DataType.STRING)
    groupIds : string;

    @Column(DataType.INTEGER(1))
    category : number;

    @Column(DataType.INTEGER(1))
    need_sign : number;

    @Column
    remark : string;

    @Column
    description : string;

    @Column
    fields : string;
    
    // @CreatedAt
    // created_at: Date;

    // @UpdatedAt
    // updated_at: Date;
    
    @DeletedAt
    deleted_at: Date;

    //  toJSON(){
    //   let values = Object.assign({}, this.get());
    //   Object.keys(values).forEach((key,i)=>{
    //     if(typeof values[key] === 'object'){
    //       values[key] = (values[key]==null?null:moment(values[key]).format("YYYY-MM-DD HH:mm:ss"));
    //     }
    //     values[key] = values[key]
    //   })
    //   return values;
    // }
}