import {Table, PrimaryColumn, Column,Entity,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity( 'base_product')
export class Product {

    /**
     * 对于细致的产品分类，包括子类，属性，相关产品等可以等产品多到必须细分的时候再说
     * 
     */

    @PrimaryColumn("int", { generated: true , length:"11",comment:"产品id"})
    id: number; 

    @Column({length:"50",comment:"产品名称",name : 'name',nullable : false})
    name: string;

    @Column({length:"50",comment:"产品编号", name : 'productNo'})
    productNo: string;

    @Column("text",{comment:"产品描述"})
    desc: string;

    @Column("text",{comment:"用户描述"})
    userdesc: string;

    @Column("int",{comment:"产品价格"})
    price :number

    @Column({comment : "分类"})
    category : string

    @Column("json",{comment:"产品规格"})
    spec : any

    @Column("int",{comment:'关联id，可以查到关联表'})
    assistid : number

    @Column({comment:'关联类型，可以查到关联表，可以拿表名作为type'})
    assisttype : string

    @Column("int",{comment:"状态",length:1})
    status : number


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}