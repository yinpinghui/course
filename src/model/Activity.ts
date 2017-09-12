import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey, Length,CreatedAt,UpdatedAt,DeletedAt,DataType} from 'sequelize-typescript';
import {User} from "./User"
import * as moment from "moment"
import {BaseModel} from "../base/BaseModel"
@Table({
    tableName: 'base_activity',
    comment: '活动表',
})
export class Activity extends BaseModel{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @BelongsTo(() => User, 'creator_id')
    creator: User;

    @Column({})
    title: string;

    @Column
    headerimg: string;//课节的头像
    
    @Column 
    address : string;//活动（上课）地点

    @Column 
    fee : number; //课节的费用

    @Column 
    type : number; //活动的实体类型，比如聊天型还是直播型

    @Column
    description : string;

    @Column
    remark : string;

    @Column 
    status : number; //当前状态

    @Column
    startTime : Date;

    @Column
    endTime : Date;

    @Column
    parentid : number;

    @Column 
    parentType : string;
}