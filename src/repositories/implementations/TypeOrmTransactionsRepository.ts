import { AppDataSource } from "@database/dataSource";
import { Transaction } from "@database/entities/Transaction";
import { ITransactionsRepository } from "@repositories/ITransactionsRepository";

export class TypeOrmTransactionsRepository implements ITransactionsRepository {
  private transactionsRepository =
    AppDataSource.manager.getRepository(Transaction);

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.find();
    return transactions;
  }

  async findById(id: string): Promise<Transaction | undefined> {
    const category = await this.transactionsRepository.findOne({
      where: { id },
    });

    if (category === null) {
      return undefined;
    }

    return category;
  }

  async save(category: Transaction): Promise<void> {
    await this.transactionsRepository.save(category);
  }

  async delete(id: string): Promise<void> {
    await this.transactionsRepository.delete(id);
  }
}
