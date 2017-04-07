import {Table, PrimaryColumn, Column,Entity,CreateDateColumn,UpdateDateColumn,ManyToOne} from "typeorm";
import {User} from './User'
@Entity( 'base_order')
export class OrderHeader {

    /**
     * 对于细致的产品分类，包括子类，属性，相关产品等可以等产品多到必须细分的时候再说
     * 
     */

    @PrimaryColumn("int", { generated: true , length:"11",comment:"订单id"})
    id: number; 

    @Column({length:"30",comment:"订单No",unique:true})
    orderNo: number; 

    @Column({length:"50",comment:"订单类型"})
    orderType: string;

    @Column({length:"50",comment:"订单来源"})
    orderFrom: string;

    @Column("int",{comment:"订单总价钱"})
    totlePrice : number

    @Column("int",{comment:"订单状态",length:1})
    status : number

    @Column("text",{comment:"用户备注"})
    userremark : string

    @Column()
    mobile : string

    @Column()
    username : string

    @ManyToOne(type => User)
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;



}