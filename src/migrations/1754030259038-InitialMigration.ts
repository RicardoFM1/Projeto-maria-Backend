import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1754030259038 implements MigrationInterface {
    name = 'InitialMigration1754030259038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "venda_produto" ("id" SERIAL NOT NULL, "quantidade" integer NOT NULL, "venda_id" integer, "produto_id" integer, CONSTRAINT "PK_7cdcb6ebe0268910b92083a8df9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "venda_produto" ADD CONSTRAINT "FK_35b1db67c355533e246acb089b1" FOREIGN KEY ("venda_id") REFERENCES "vendas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "venda_produto" ADD CONSTRAINT "FK_956816935bba24fd26801f6f0e2" FOREIGN KEY ("produto_id") REFERENCES "doces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "venda_produto" DROP CONSTRAINT "FK_956816935bba24fd26801f6f0e2"`);
        await queryRunner.query(`ALTER TABLE "venda_produto" DROP CONSTRAINT "FK_35b1db67c355533e246acb089b1"`);
        await queryRunner.query(`DROP TABLE "venda_produto"`);
    }

}
