import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUsersTable1678739486094 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`
    );
    await queryRunner.query(`UPDATE "users" SET "uuid" = uuid_generate_v4()`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "PK_users_uuid" PRIMARY KEY ("uuid")`
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "PK_users_id"`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `UPDATE "users" SET "id" = nextval('users_id_seq'::regclass)`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "PK_users_id" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "PK_users_uuid"`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "uuid"`);
  }
}
