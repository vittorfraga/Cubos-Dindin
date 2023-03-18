import { ITransactionsRepository } from "@repositories/ITransactionsRepository";
import AppError from "@shared/errors/AppError";

export class DeleteTransactionUseCase {
  constructor(private transactionsRepository: ITransactionsRepository) {}

  async execute(id: string, user_id: string): Promise<void> {
    const transaction = await this.transactionsRepository.findById(id);

    console.log(transaction);

    if (!transaction) {
      throw new AppError("Transaction not found.", 404);
    }

    if (transaction.user_id !== user_id) {
      throw new AppError("Unauthorized", 401);
    }

    await this.transactionsRepository.delete(id);
  }
}
