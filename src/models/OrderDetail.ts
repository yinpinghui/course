import {Table, PrimaryColumn, Column,Entity,CreateDateColumn,UpdateDateColumn,ManyToOne} from "typeorm";
import {User} from './User'
import {OrderHeader} from './OrderHeader'
import {Product} from './Product'
@Entity( 'base_orderdetail')
export class OrderDetail {

    @PrimaryColumn("int", { generated: true , length:"11",comment:"订单id"})
    id: number; 

    @ManyToOne(type=>OrderHeader)
    header : OrderHeader

    @ManyToOne(type=>Product)
    product : Product

    @Column("int")
    price : number;

    
    
}