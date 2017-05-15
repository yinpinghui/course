import {Table, PrimaryColumn, Column,Entity,ManyToOne,OneToMany,ManyToMany,JoinTable} from "typeorm";
import {User} from './User'
@Entity( 'base_course',{})

//view  https://github.com/typeorm/typeorm/blob/master/src/decorator/options/ColumnOptions.ts
/**
 * 课程名称
 * 课程类型 （直播型， 线上聊天型， 过关答题型）
 * 课程类别： 一次一建，用完就走，还是不断重复，分第几期，第几期
 * 设置可见性，
 * 是否允许别人搜索到我自己的课程
 * 试听，试看部分
 * 作者
 * 课程开始时间
 * 课程细节
 * 课程安排，比如每周几节，共多少节
 * 评价体系
 * 介绍，图文介绍
 * 课程类型
 * 是否付费
 * 我要咨询
 * 课程时长
 * 课程进度
 * 课程达标
 * 基本状态，是否开启，是否关闭
 * lesson怎么算，课节 ， 课时
 */


export class Course {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({length:"255",comment : "课程名称", })
    name: string;

    @Column({comment : "课程开始时间", type:"datetime"})
    startTime: Date;

    @Column()
    status: number;

    @Column({comment : "简介", nullable: true,type:"text"})
    introduction : string;

    @Column({comment : "备注", nullable: true,type:"text"})
    remark : string;

    @Column({length:"5", comment : "分类", nullable: true,default : "1"})
    category : string;

    @Column({length:"255", comment : "关键字", nullable : true})
    keyword : string

    @Column({length:"255",nullable: true})
    subject : string

    @Column({length:"10",nullable:false,default:0,type:"int"})
    price : number

    @Column({length:"2",nullable : false, default: 0, type: "int"})
    degree : number
    
    @Column({nullable : false, default: true, type: "boolean"})
    isPrivate : boolean
    
    @Column({length:"250",nullable : true, type: "string"})
    location : string
    
    @Column({length:"150",nullable : true})
    credits : string

    @Column({length:"255",nullable : true})
    headimg : string

    @ManyToOne(type=> User)
    creator : User;

    @ManyToMany(type=> User,{
        cascadeInsert: true,
        cascadeUpdate: true}
    )
    @JoinTable()
    attenances : User[] ;
    
}