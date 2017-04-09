import {Table, PrimaryColumn, Column,Entity,ManyToOne,OneToMany,ManyToMany,JoinTable,CreateDateColumn,UpdateDateColumn} from "typeorm";
import {User} from './User'
import {Enroll} from './Enroll'

@Entity( 'base_enrollDetail')
export class EnrollDetail {

    @PrimaryColumn("int", { generated: true })
    id: number;


    @ManyToOne(type=>Enroll, enroll => enroll.detail)
    enroll : Enroll;

    @ManyToOne(type => User)
    user: User;
}