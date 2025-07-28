import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753682119743 implements MigrationInterface {
    name = 'InitialMigration1753682119743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" RENAME COLUMN "hora_da_venda" TO "data_da_venda"`);
        await queryRunner.query(`ALTER TABLE "doces" ADD CONSTRAINT "UQ_2a33f6165e5df3a52ed4abb5a40" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doces" DROP CONSTRAINT "UQ_2a33f6165e5df3a52ed4abb5a40"`);
        await queryRunner.query(`ALTER TABLE "vendas" RENAME COLUMN "data_da_venda" TO "hora_da_venda"`);
    }

}
