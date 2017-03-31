import {Table, PrimaryColumn, Column,Entity,ManyToOne} from "typeorm";
import {User} from './User'
@Entity( 'base_course_attenance')
export class Course {

    @Column()
    courseid : number;

    @ManyToOne(type=> User)
    user : User;
}