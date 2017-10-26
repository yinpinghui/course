
import {Table, Model, PrimaryKey, Column,DataType, AutoIncrement, BelongsTo, ForeignKey, Length} from 'sequelize-typescript';
import * as moment from "moment"
import {User} from "./User"
import {BaseModel} from "../base/BaseModel"
@Table({
	tableName: 'uc_passport',
	comment: 'passport 表',
})
export class Passport extends BaseModel{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.BIGINT)
	id: number;
	
    @Column
	protocol: string;
	@Column
	provider: string;
	@Column
	appid: string;
	@Column
	corpid: string;

	@Column
	username: string;
	
	@Column({
		type: DataType.STRING,
		unique: true,
	})
	identifier: string;

	@Column
	union_id: string;

	@Column
	headimg: string;

	@Column(DataType.INTEGER)
    status : number;

	@Column(DataType.INTEGER)
	subscribe: number;

	@BelongsTo(() => User, 'uid')
    user: User;
}