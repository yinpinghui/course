import {Table, PrimaryColumn, Column,Entity,CreateDateColumn,UpdateDateColumn,ManyToOne} from "typeorm";
import {User} from './User'
import {Product} from './Product'
@Entity( 'base_shoppingcart')
export class ShoppingCart {

    @PrimaryColumn("int", { generated: true , length:"11",comment:"订单id"})
    id: number; 

    @ManyToOne(type=>Product)
    product : Product

    @Column("int",{comment : "单价",nullable : false,length:10 ,type:"int"})
    price : number;

    @Column("int",{comment:"数量",nullable : false,length:5, type:"int"})
    amount : number;
    
    @ManyToOne(type => User)
    user: User;

}