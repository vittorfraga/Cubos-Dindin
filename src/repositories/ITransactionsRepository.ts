import { CreateTransactionDTO } from "@UseCases/Transaction/CreateTransaction/CreateTransactionDTO";
import { UpdateTransactionDTO } from "@UseCases/Transaction/UpdateTransaction/UpdateTransactionDTO";
import { Transaction } from "src/database/entities/Transaction";

export interface ITransactionsRepository {
  findById(id: string): Promise<Transaction | undefined>;
  delete(id: string): Promise<void>;
  save(transaction: Transaction): Promise<void>;
  findAll(user_id: string, filters?: string[]): Promise<Transaction[]>;
  create(transaction: CreateTransactionDTO): Promise<Transaction | undefined>;
  update(transaction: UpdateTransactionDTO): Promise<Transaction | undefined>;
}
