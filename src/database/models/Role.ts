import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()

export class Role extends BaseEntity{

@PrimaryGeneratedColumn()
id!: Number

 @Column({ name: 'name'})
 name!: string
}