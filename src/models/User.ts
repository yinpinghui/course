import {Table, PrimaryColumn, Column,Entity} from "typeorm";

@Entity( 'uc_user',{skipSchemaSync:true})
export class User {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    mobile: string;

    @Column()
    name: string;

    @Column()
    sex: number;

}