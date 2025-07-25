import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753486559480 implements MigrationInterface {
    name = 'InitialMigration1753486559480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_407eca1068a4e519c8ce198e454"`);
        await queryRunner.query(`ALTER TABLE "vendas" RENAME COLUMN "produto" TO "produtoId"`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a" FOREIGN KEY ("produtoId") REFERENCES "doces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_4851720fa413ee659cfa67d1b7a"`);
        await queryRunner.query(`ALTER TABLE "vendas" RENAME COLUMN "produtoId" TO "produto"`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_407eca1068a4e519c8ce198e454" FOREIGN KEY ("produto") REFERENCES "doces"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
