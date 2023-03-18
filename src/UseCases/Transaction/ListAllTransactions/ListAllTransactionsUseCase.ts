import { Transaction } from "@database/entities/Transaction";
import { ITransactionsRepository } from "@repositories/ITransactionsRepository";

export class ListAllTransactionsUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  async execute(user_id: string): Promise<Transaction[]> {
    let transactions = await this.transactionsRepository.findAll(user_id);

    return transactions;
  }
}
