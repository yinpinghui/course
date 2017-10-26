import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey, Length,CreatedAt,UpdatedAt,DeletedAt,DataType} from 'sequelize-typescript';
import {User} from "./User"
import * as moment from "moment"
import {BaseModel} from "../base/BaseModel"
@Table({
    tableName: 'base_article',
    comment: '文章表'
})
export class Article extends BaseModel{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @BelongsTo(() => User, 'creator_id')
    creator: User;

    @Column({})
    title: string;

    @Column(DataType.TEXT)
    summary : string;

    @Column(DataType.TEXT)
    content : string;

    @Column 
    address : string;

    @Column( DataType.INTEGER(1)) 
    status : number;

    @Column( DataType.INTEGER()) 
    readnum : number;
}