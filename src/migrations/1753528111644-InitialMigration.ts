import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753528111644 implements MigrationInterface {
    name = 'InitialMigration1753528111644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doces" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "preco_de_custo" integer NOT NULL, "preco_de_venda" integer NOT NULL, CONSTRAINT "PK_15dd7034bedd13eddf1cdd59e5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendas" ("id" SERIAL NOT NULL, "quantidade" integer NOT NULL, "total_vendido" integer NOT NULL, "total_lucro" integer NOT NULL, "hora_da_venda" date NOT NULL DEFAULT now(), "produtoId" integer, CONSTRAINT "PK_371c42d415efbac7097bd08b744" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "despesas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "valor" integer NOT NULL, CONSTRAINT "PK_e56af303d820f51a6e6a007b380" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a" FOREIGN KEY ("produtoId") REFERENCES "doces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a"`);
        await queryRunner.query(`DROP TABLE "despesas"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "vendas"`);
        await queryRunner.query(`DROP TABLE "doces"`);
    }

}
