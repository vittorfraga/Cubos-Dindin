import AppError from "@shared/errors/AppError";
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
    const transaction = await this.transactionsRepository.create({
      type,
      description,
      value,
      user_id,
      category_id,
    });

    const category = await this.categoryRepository.findById(category_id);
    console.log(category);

    if (!category) {
      throw new AppError("Invalid category id", 400);
    }

    const categoryName = category?.name;

    const transactionCreated = { ...transaction, categoryName };

    return transactionCreated;
  }
}
