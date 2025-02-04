import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Appointments1720115474398 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'appointments',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'appointment_date',
						type: 'datetime',
						isUnique: true,
					},
					{
						name: 'user_id',
						type: 'int',
					},
					{
						name: 'service_id',
						type: 'int',
					},
				],
				foreignKeys: [
					{
						columnNames: ['user_id'],
						referencedColumnNames: ['id'],
						referencedTableName: 'users',
						onDelete: 'CASCADE',
					},
					{
						columnNames: ['service_id'],
						referencedColumnNames: ['id'],
						referencedTableName: 'services',
						onDelete: 'CASCADE',
					},
				],
			}),
			true,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('appointments');
	}
}
