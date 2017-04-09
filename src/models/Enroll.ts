import {Table, PrimaryColumn, Column,Entity,ManyToOne,OneToMany,ManyToMany,JoinTable,CreateDateColumn,UpdateDateColumn} from "typeorm";
import {User} from './User'
import {EnrollDetail} from './EnrollDetail';
@Entity( 'base_enroll')
export class Enroll {
    
    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    activityName: string;


    @Column()
    activityDesc: string;

    @Column()
    assistType: string;

    @Column("date")
    activityStart: Date;

    @Column("date")
    acttivityEnd: Date;

    @Column("date")
    enrollStart: Date;

    @Column("date")
    enrollEnd: Date;

    @Column()
    from : string;

    @Column()
    location : string;

    @Column("text")
    remark : string;

    @Column("boolean")
    anonymousShowList : Boolean;

    @Column("boolean")
    userShowList : Boolean;

    @Column("int")
    userlimit : Number;


    @ManyToOne(type => User)
    creator: User;

    @OneToMany(type => EnrollDetail, detail => detail.enroll, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    detail: EnrollDetail[] = [];


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;



}