import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753772749535 implements MigrationInterface {
    name = 'InitialMigration1753772749535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doces" DROP CONSTRAINT "UQ_2a33f6165e5df3a52ed4abb5a40"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doces" ADD CONSTRAINT "UQ_2a33f6165e5df3a52ed4abb5a40" UNIQUE ("name")`);
    }

}
