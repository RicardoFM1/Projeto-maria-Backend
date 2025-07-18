import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1752879628836 implements MigrationInterface {
    name = 'InitialMigration1752879628836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendas" ("id" SERIAL NOT NULL, "quantidade" integer NOT NULL, "total_vendido" integer NOT NULL, "total_lucro" integer NOT NULL, "hora_da_venda" date NOT NULL DEFAULT now(), "produtoId" integer, CONSTRAINT "PK_371c42d415efbac7097bd08b744" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a" FOREIGN KEY ("produtoId") REFERENCES "doces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a"`);
        await queryRunner.query(`DROP TABLE "vendas"`);
    }

}
