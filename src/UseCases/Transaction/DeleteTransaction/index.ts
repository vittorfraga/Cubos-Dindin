import { TypeOrmTransactionsRepository } from "@repositories/implementations/TypeOrmTransactionsRepository";
import { DeleteTransactionController } from "./DeleteTransactionController";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase";

const typeOrmTransactionRepository = new TypeOrmTransactionsRepository();

const deleteTransactionUseCase = new DeleteTransactionUseCase(
  typeOrmTransactionRepository
);
const deleteTransactionController = new DeleteTransactionController(
  deleteTransactionUseCase
);

export { deleteTransactionUseCase, deleteTransactionController };
