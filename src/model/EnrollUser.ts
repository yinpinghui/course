import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey, Length,CreatedAt,UpdatedAt,DeletedAt,DataType} from 'sequelize-typescript';
import {Activity} from './Activity'
import * as moment from 'moment' 
import {BaseModel} from "../base/BaseModel"

@Table({
  tableName: 'base_enrolluser'
})
export class EnrollUser extends BaseModel{//extends Model<Enroll>{

}