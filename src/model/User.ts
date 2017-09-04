import {Table, Model, PrimaryKey, Column,DataType, AutoIncrement, BelongsTo, ForeignKey, Length} from 'sequelize-typescript';
import * as moment from "moment"
import {BaseModel} from "../base/BaseModel"
@Table({
  tableName: 'uc_user',
  comment: '用户表',
})
export class User extends BaseModel{


	/**
	 *   
	@Column
	get name(): string {
		return 'My name is ' + this.getDataValue('name');
	}
	
	set name(value: string) {
		this.setDataValue('name', value);
	}
	 */

	@PrimaryKey
	@AutoIncrement
	@Column(DataType.BIGINT)
	id: number;

    @Column
	mobile: string;
	
    @Column({
		type: DataType.STRING,
		comment: '用户名',
		allowNull: true,
		defaultValue: null,
		
	})
    fullname: string;

    @Column
    nickname: string;

    @Column(DataType.INTEGER)
    sex: number;

    @Column(DataType.INTEGER)
    status : number;

    @Column 
    headimg : string;

    @Column(DataType.INTEGER)
    vip : number;

    @Column
    corpId : string;
}