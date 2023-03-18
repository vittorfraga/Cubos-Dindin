import { v4 as uuid } from "uuid";

import { Transaction } from "@database/entities/Transaction";
import { ITransactionsRepository } from "@repositories/ITransactionsRepository";
import { CreateTransactionDTO } from "@UseCases/Transaction/CreateTransaction/CreateTransactionDTO";
import { UpdateTransactionDTO } from "@UseCases/Transaction/UpdateTransaction/UpdateTransactionDTO";

export class TestTransactionsRepository implements ITransactionsRepository {
  private transactions: Transaction[] = [];

  async create({
    type,
    description,
    value,
    user_id,
    category_id,
  }: CreateTransactionDTO): Promise<Transaction | undefined> {
    const transaction = new Transaction();

    transaction.id = uuid();
    transaction.type = type;
    transaction.description = description;
    transaction.value = value;
    transaction.user_id = user_id;
    transaction.category_id = category_id;

    this.transactions.push(transaction);

    return transaction;
  }

  async update({
    id,
    type,
    description,
    value,
    user_id,
    category_id,
  }: UpdateTransactionDTO): Promise<Transaction | undefined> {
    const transaction = this.transactions.find((t) => t.id === id);

    if (!transaction) {
      return undefined;
    }

    transaction.type = type;
    transaction.description = description;
    transaction.value = value;
    transaction.category_id = category_id;
    transaction.updatedAt = new Date();

    return transaction;
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactions;
  }

  async findById(id: string): Promise<Transaction | undefined> {
    const transaction = this.transactions.find(
      (transaction) => transaction.id === id
    );
    return transaction;
  }

  async save(transaction: Transaction): Promise<void> {
    this.transactions.push(transaction);
  }

  async delete(id: string): Promise<void> {
    const index = this.transactions.findIndex(
      (transaction) => transaction.id === id
    );
    if (index !== -1) {
      this.transactions.splice(index, 1);
    }
  }
}
