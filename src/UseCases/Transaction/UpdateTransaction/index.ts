import { TypeOrmTransactionsRepository } from "@repositories/implementations/TypeOrmTransactionsRepository";
import { UpdateTransactionController } from "./UpdateTransactionController";
import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase";

const typeOrmTransactionsRepository = new TypeOrmTransactionsRepository();

const updateTransactionUseCase = new UpdateTransactionUseCase(
  typeOrmTransactionsRepository
);

const updateTransactionController = new UpdateTransactionController(
  updateTransactionUseCase
);

export { updateTransactionUseCase, updateTransactionController };
