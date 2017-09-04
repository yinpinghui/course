
import {Table, Model, PrimaryKey, Column,DataType, AutoIncrement, BelongsTo, ForeignKey, Length} from 'sequelize-typescript';
import * as moment from "moment"
import {BaseModel} from "../base/BaseModel"
@Table({
  tableName: 'uc_passport',
  comment: 'passport 表',
})
export class Passport extends BaseModel{

}