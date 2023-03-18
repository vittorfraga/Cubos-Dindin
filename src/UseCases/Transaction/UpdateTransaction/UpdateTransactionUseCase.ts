import { ICategoryRepository } from "@repositories/ICategoryRepository";
import { ITransactionsRepository } from "@repositories/ITransactionsRepository";
import AppError from "@shared/errors/AppError";
import { UpdateTransactionDTO } from "./UpdateTransactionDTO";

export class UpdateTransactionUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  async execute({
    id,
    type,
    description,
    value,
    category_id,
    user_id,
  }: UpdateTransactionDTO) {
    const transaction = await this.transactionsRepository.findById(id);

    console.log(transaction);

    if (!transaction) {
      throw new AppError("Transaction not found!", 404);
    }

    if (transaction.user_id !== user_id) {
      throw new AppError("Unauthorized", 401);
    }

    transaction.type = type;
    transaction.description = description;
    transaction.value = value;
    transaction.category_id = category_id;
    transaction.updatedAt = new Date();

    await this.transactionsRepository.update(transaction);

    return transaction;
  }
}
