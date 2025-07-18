import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1752878329633 implements MigrationInterface {
    name = 'InitialMigration1752878329633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doces" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "preco_de_custo" integer NOT NULL, "preco_de_venda" integer NOT NULL, CONSTRAINT "PK_15dd7034bedd13eddf1cdd59e5b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "doces"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
