import { TypeOrmCategoryRepository } from "src/repositories/implementations/TypeOrmCategoryRepository";
import { TypeOrmTransactionsRepository } from "src/repositories/implementations/TypeOrmTransactionsRepository";
import { CreateTransactionController } from "./CreateTransactionController";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

const typeOrmTransactionsRepository = new TypeOrmTransactionsRepository();
const typeOrmCategoryRepository = new TypeOrmCategoryRepository();

const createTransactionUseCase = new CreateTransactionUseCase(
  typeOrmTransactionsRepository,
  typeOrmCategoryRepository
);

const createTransactionController = new CreateTransactionController(
  createTransactionUseCase
);

export { createTransactionUseCase, createTransactionController };
