import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()

export class User extends BaseEntity{

@PrimaryGeneratedColumn()
id!: Number

 @Column({ name: 'first_name'})
 first_name!: string

 @Column({ name: 'last_name'})
 last_name!: string

 @Column({ name: 'email'})
 email!: string

 @Column({ name: 'password_hash'})
 password_hash!: string

 @Column({ name: 'role_id'})
 role_id!: Number
}