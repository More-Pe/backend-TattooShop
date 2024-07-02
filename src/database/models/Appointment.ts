import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment extends BaseEntity {
    
  @PrimaryGeneratedColumn()
  id!: Number;

  @Column({ name: "appointment_date" })
  appointment_date!: Date;

  @Column({ name: "user_id" })
  user_id!: Number;

  @Column({ name: "service_id" })
  service_id!: Number;
}
