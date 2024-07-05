import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("appointments")
export class Appointment extends BaseEntity {
    
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "appointment_date" })
  appointment_date!: Date;

  @Column({ name: "user_id" })
  user_id!: number;

  @Column({ name: "service_id" })
  service_id!: number;
}
