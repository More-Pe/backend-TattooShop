import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("services")

export class Service extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: Number;

  @Column({ name: "service_name" })
  service_name!: string;

  @Column({ name: "description" })
  description!: string;
}
