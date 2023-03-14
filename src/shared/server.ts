import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { AppDataSource } from "src/database/dataSource";
import AppError from "./errors/AppError";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return res
        .status(error.statusCode)
        .json({ status: "error", message: error.message });
    }
    console.log(error.message);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  });

  return app.listen(process.env.PORT);
});
