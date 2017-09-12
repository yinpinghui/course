import {Table, Model, HasMany,PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey, Length,CreatedAt,UpdatedAt,DeletedAt,DataType} from 'sequelize-typescript';
import {User} from "./User"
import * as moment from "moment"
import {Activity} from './Activity'
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
    creator: User; //创建者

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
    type : number; //分类之一， 未来还有其他维度，比如行业，科目,这些维度都是用来搜索的

    @Column({
        type : DataType.TEXT,
        comment: "描述",
        allowNull : true
    })
    description : string;   //描述可以是普通文本的，也可以是图文混排的


    @Column({
        type : DataType.TEXT,
        allowNull : true,
        comment: "备注"
    })
    @Column
    remark : string; //备注是管理员或者后台人员看到的，不是2c的

    @Column({
        type : DataType.INTEGER(1)
    })
    status : number;  //尚未开始，已经关闭，进行中，销毁

    @Column
    startTime : Date; //开始时间，总课程的开始时间，一般来说，用不上

    @Column
    endTime : Date;

    @HasMany(() => Activity,"parentid")
    lesson :  Activity[];
}