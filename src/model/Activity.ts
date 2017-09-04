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
    headerimg: string;
    
    @Column 
    address : string;

    @Column 
    fee : number;

    @Column 
    type : number;

    @Column
    description : string;

    @Column
    remark : string;

    @Column 
    status : number;

    @Column
    startTime : Date;

    @Column
    endTime : Date;
}