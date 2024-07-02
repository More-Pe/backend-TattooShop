import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Roles1719911334961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: "roles",
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
                },
            ],
        }),
        true
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("roles")
    }

}
