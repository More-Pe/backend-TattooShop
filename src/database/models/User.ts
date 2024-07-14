import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './Role';
import { Appointment } from './Appointment';

@Entity('users')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ name: 'first_name' })
	first_name!: string;

	@Column({ name: 'last_name' })
	last_name!: string;

	@Column({ name: 'email' })
	email!: string;

	@Column({ name: 'password_hash' })
	password_hash!: string;

	@Column({ name: 'role_id' })
	role_id!: number;

	@ManyToOne(() => Role, (role) => role.users)
	@JoinColumn({ name: 'role_id' })
	role!: Role;

	@OneToMany(() => Appointment, (appointments) => appointments.user)
	appointments!: Appointment[];
}
