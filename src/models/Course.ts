import {Table, PrimaryColumn, Column,Entity,ManyToOne,OneToMany,ManyToMany,JoinTable} from "typeorm";
import {User} from './User'
@Entity( 'base_course')
export class Course {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    startTime: Date;


    @Column()
    status: number;

    @Column()
    introduction : string;

    @Column()
    remark : string;

    @Column()
    category : string;

    @Column()
    keyword : string

    @Column()
    subject : string

    @Column()
    price : number

    @Column()
    degree : number
    
    @Column()
    isPrivate : boolean
    
    @Column()
    location : string
    
    @Column()
    credits : string

    @Column()
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