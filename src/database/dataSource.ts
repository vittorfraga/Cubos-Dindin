import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "testedb",
  synchronize: true,
  logging: true,
  entities: [`${__dirname}/../database/entities/*{.ts,.js}`],
  migrations: [`${__dirname}/../shared/migrations/*{.ts,.js}`],
});
