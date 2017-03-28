import {Table,  Model,CreatedAt,UpdatedAt,DeletedAt,PrimaryKey, Column, AutoIncrement, BelongsToMany,
DefaultScope, Scopes} from 'sequelize-typescript';

@Table({
  tableName: 'uc_user'
})
export class User extends Model<User> {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  fullname: string;

  @Column
  mobile: string;

  @Column
  sex : Number ;

  @Column
  status : Number ;

  @CreatedAt
  creation_time: Date;


  @UpdatedAt
  updated_time: Date;
  
  @DeletedAt
  deletion_time: Date;
}