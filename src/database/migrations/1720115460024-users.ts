import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Users1720115460024 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'first_name',
						type: 'varchar',
						length: '255',
						isNullable: true,
					},
					{
						name: 'last_name',
						type: 'varchar',
						length: '255',
						isNullable: true,
					},
					{
						name: 'email',
						type: 'varchar',
						length: '255',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'password_hash',
						type: 'varchar',
						length: '255',
						isNullable: false,
					},
					{
						name: 'role_id',
						type: 'int',
						default: 3,
					},
				],
				foreignKeys: [
					{
						columnNames: ['role_id'],
						referencedTableName: 'roles',
						referencedColumnNames: ['id'],
						onDelete: 'CASCADE',
					},
				],
			}),
			true,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users');
	}
}
