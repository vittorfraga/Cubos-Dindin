import { Transaction } from "src/database/entities/Transaction";

export interface ITransactionsRepository {
  findById(id: string): Promise<Transaction | undefined>;
  delete(id: string): Promise<void>;
  save(transaction: Transaction): Promise<void>;
  findAll(): Promise<Transaction[]>;
}
