import {Table, Column, Model,CreatedAt,UpdatedAt,DeletedAt} from 'sequelize-typescript';

@Table
class User extends Model<User> {

  @Column
  name: string;

  @Column
  age: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
  
  @DeletedAt
  deletionDate: Date;
}