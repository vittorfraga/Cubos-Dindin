import { AppDataSource } from "@database/dataSource";
import { Transaction } from "@database/entities/Transaction";
import { ITransactionsRepository } from "@repositories/ITransactionsRepository";
import { CreateTransactionDTO } from "@UseCases/Transaction/CreateTransaction/CreateTransactionDTO";
import { UpdateTransactionDTO } from "@UseCases/Transaction/UpdateTransaction/UpdateTransactionDTO";

export class TypeOrmTransactionsRepository implements ITransactionsRepository {
  private transactionsRepository =
    AppDataSource.manager.getRepository(Transaction);

  async create({
    type,
    description,
    value,
    user_id,
    category_id,
  }: CreateTransactionDTO): Promise<Transaction | undefined> {
    const transaction = await this.transactionsRepository.create({
      type,
      description,
      value,
      user_id,
      category_id,
    });

    await this.transactionsRepository.save(transaction);

    return transaction;
  }

  async update({
    id,
    type,
    description,
    value,
    category_id,
  }: UpdateTransactionDTO): Promise<Transaction | undefined> {
    const transaction = await this.findById(id);

    if (!transaction) {
      return undefined;
    }

    transaction.type = type;
    transaction.description = description;
    transaction.value = value;
    transaction.category_id = category_id;
    transaction.updatedAt = new Date();

    await this.transactionsRepository.save(transaction);

    return transaction;
  }

  async findAll(user_id: string): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository
      .createQueryBuilder("transaction")
      .leftJoinAndSelect("transaction.category_id", "category")
      .where("transaction.user_id = :user_id", { user_id })
      .getMany();

    return transactions.map((transaction) => ({
      ...transaction,
      category_id: transaction.category_id.id,
      category_name: transaction.category_id.name,
    }));
  }

  async findById(id: string): Promise<Transaction | undefined> {
    const transaction = await this.transactionsRepository
      .createQueryBuilder("transaction")
      .select([
        "transaction.id",
        "transaction.description",
        "transaction.value",
        "transaction.type",
        "transaction.createdAt",
        "transaction.updatedAt",
        "category.id",
        "category.name",
        "user.id",
      ])
      .addSelect("transaction.id")
      .leftJoin("transaction.category_id", "category")
      .leftJoin("transaction.user_id", "user")
      .where("transaction.id = :id", { id })
      .getOne();

    if (!transaction) {
      return undefined;
    }

    return {
      ...transaction,
      category_id: transaction.category_id.id,
      category_name: transaction.category_id.name,
      user_id: transaction.user_id.id,
    };
  }

  async save(transaction: Transaction): Promise<void> {
    await this.transactionsRepository.save(transaction);
  }

  async delete(id: string): Promise<void> {
    await this.transactionsRepository.delete(id);
  }
}
