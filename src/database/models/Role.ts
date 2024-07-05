import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";

@Entity("roles")

export class Role extends BaseEntity{

@PrimaryGeneratedColumn()
id!: number

 @Column({ name: 'name'})
 name!: string

//  @OneToMany(() => User, user => user.role)
//  @JoinColumn({ name: ""})
//  user! : User [];

}