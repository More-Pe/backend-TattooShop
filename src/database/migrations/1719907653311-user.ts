import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1719907653311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "first_name",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password_hash",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "role_id",
                        type: "int",
                        default: 3
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['role_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'roles'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }


}