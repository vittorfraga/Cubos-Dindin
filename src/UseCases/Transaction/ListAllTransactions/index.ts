import { TypeOrmTransactionsRepository } from "@repositories/implementations/TypeOrmTransactionsRepository";
import { ListAllTransactionsController } from "./ListAllTransactionsController";
import { ListAllTransactionsUseCase } from "./ListAllTransactionsUseCase";

const typeOrmTransactionsRepository = new TypeOrmTransactionsRepository();

const listAllTransactionUseCase = new ListAllTransactionsUseCase(
  typeOrmTransactionsRepository
);
const listAllTransactionController = new ListAllTransactionsController(
  listAllTransactionUseCase
);

export { listAllTransactionUseCase, listAllTransactionController };
