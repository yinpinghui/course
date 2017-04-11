import {Table, PrimaryColumn, Column,Entity,ManyToOne,OneToMany,ManyToMany,JoinTable} from "typeorm";
import {User} from './User'
@Entity( 'base_course',{})

//view  https://github.com/typeorm/typeorm/blob/master/src/decorator/options/ColumnOptions.ts
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