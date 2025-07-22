import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753141196241 implements MigrationInterface {
    name = 'InitialMigration1753141196241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "despesas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "valor" integer NOT NULL, CONSTRAINT "PK_e56af303d820f51a6e6a007b380" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "despesas"`);
    }

}
