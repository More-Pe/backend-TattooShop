import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Service } from './Service';
import { User } from './User';

@Entity('appointments')
export class Appointment extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ name: 'appointment_date' })
	appointment_date!: Date;

	@Column({ name: 'user_id' })
	user_id!: number;

	@Column({ name: 'service_id' })
	service_id!: number;


	@ManyToOne(() => Service, (service) => service.appointments)
	@JoinColumn({ name: 'service_id' })
	service!: Service;

	@ManyToOne(() => User, (user) => user.appointments)
	@JoinColumn({ name: 'user_id' })
	user!: User;
}
