import {Table, PrimaryColumn, Column,Entity,ManyToOne} from "typeorm";
import {User} from './User'
@Entity( 'base_course_attenance')
export class CourseUser {

    @PrimaryColumn("int", { generated: true })
    id: number;
    
    @Column()
    courseid : number;

    @ManyToOne(type=> User)
    user : User;
}