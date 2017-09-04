import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey, Length,CreatedAt,UpdatedAt,DeletedAt,DataType} from 'sequelize-typescript';
import {User} from "./User"
import * as moment from "moment"
import {BaseModel} from "../base/BaseModel"
@Table({
    tableName: 'base_course',
    comment: '课程',
})
export class Course extends BaseModel{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @BelongsTo(() => User, 'creator_id')
    creator: User;

    @Column({
        type : DataType.STRING(255),
        comment : '主题'
    })
    title: string;

    @Column({
        type : DataType.STRING(255),
        comment : '图片'
    })
    headerimg: string;
    
    @Column 
    address : string;

    @Column 
    fee : number;

    @Column 
    type : number;

    @Column({
        type : DataType.TEXT,
        comment: "描述",
        allowNull : true
    })
    description : string;


    @Column({
        type : DataType.TEXT,
        allowNull : true,
        comment: "备注"
    })
    @Column
    remark : string;

    @Column({
        type : DataType.INTEGER(1)
    })
    status : number;

    @Column
    startTime : Date;

    @Column
    endTime : Date;
}