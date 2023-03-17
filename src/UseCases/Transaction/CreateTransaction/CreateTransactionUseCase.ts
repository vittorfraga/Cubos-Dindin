import { Transaction } from "src/database/entities/Transaction";
import { ICategoryRepository } from "src/repositories/ICategoryRepository";

import { ITransactionsRepository } from "src/repositories/ITransactionsRepository";

import { CreateTransactionDTO } from "./CreateTransactionDTO";

export class CreateTransactionUseCase {
  constructor(
    private transactionsRepository: ITransactionsRepository,
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({
    type,
    description,
    value,
    category_id,
    user_id,
  }: CreateTransactionDTO) {
    const transaction = new Transaction();

    transaction.description = description;
    transaction.value = value;
    transaction.category_id = category_id;
    transaction.user_id = user_id;
    transaction.type = type;

    await this.transactionsRepository.save(transaction);

    const category = await this.categoryRepository.findById(category_id);
    const categoryName = category?.name;

    const transactionCreated = { ...transaction, categoryName };

    return transactionCreated;
  }
}
