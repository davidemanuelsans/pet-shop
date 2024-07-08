import { MigrationInterface, QueryRunner } from "typeorm"

export class AddTagColumn implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE product ADD tag text[];`,
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE product DROP COLUMN tag;`,
        )
    }
}