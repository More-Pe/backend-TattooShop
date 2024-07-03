import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()

export class Service extends BaseEntity{

@PrimaryGeneratedColumn()
id!: Number

 @Column({ name: 'service_name'})
 name!: string

 @Column({ name: 'description'})
 description!: string
}