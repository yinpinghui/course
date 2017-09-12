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
    startDate : Date; //报名开始时间

    @Column 
    endDate : Date;  //报名截止时间

    @Column(DataType.INTEGER(11)) 
    maxLimit : number; //人数限制

    @Column 
    fee : number; //费用

    @Column(DataType.INTEGER(1)) 
    status : number; //报名本身的状态，不是活动的状态

    @Column(DataType.STRING)
    uids : string;  //目标人群

    @Column(DataType.STRING)
    groupIds : string; // 目标人群

    @Column(DataType.INTEGER(1))
    category : number;  //类别

    @Column(DataType.INTEGER(1))
    need_sign : number;  //是否需要签到

    

    @Column(DataType.TEXT)
    description : string;

	@Column(DataType.TEXT)
	remark : string;
	
    @Column(DataType.TEXT)
    fields : string;
    
}