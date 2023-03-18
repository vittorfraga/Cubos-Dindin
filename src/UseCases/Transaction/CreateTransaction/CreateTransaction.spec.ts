import { TestCategoryRepository } from "@repositories/testRepositories/testCategoryRepository";
import { TestTransactionsRepository } from "@repositories/testRepositories/testTransactionsRepository";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

describe("Create Transaction", () => {
  let transactionsRepository: TestTransactionsRepository;
  let categoryRepository: TestCategoryRepository;
  let createTransactionUseCase: CreateTransactionUseCase;

  beforeEach(() => {
    transactionsRepository = new TestTransactionsRepository();
    categoryRepository = new TestCategoryRepository();
    createTransactionUseCase = new CreateTransactionUseCase(
      transactionsRepository,
      categoryRepository
    );
  });

  it("should be able to create a new income transaction", async () => {
    const category = await categoryRepository.create("Test Category");

    const transaction = await createTransactionUseCase.execute({
      type: "income",
      description: "Salary",
      value: 5000,
      user_id: "user-id",
      category_id: category.id,
    });

    expect(transaction).toHaveProperty("id");
    expect(transaction.type).toEqual("income");
    expect(transaction.description).toEqual("Salary");
    expect(transaction.value).toEqual(5000);
    expect(transaction.category_id).toEqual(category.id);
    expect(transaction.user_id).toEqual("user-id");
  });

  it("should be able to create a new outcome transaction", async () => {
    const category = await categoryRepository.create("Test Category");

    const transaction = await createTransactionUseCase.execute({
      type: "outcome",
      description: "Rent",
      value: 1000,
      user_id: "user-id",
      category_id: category.id,
    });

    expect(transaction).toHaveProperty("id");
    expect(transaction.type).toEqual("outcome");
    expect(transaction.description).toEqual("Rent");
    expect(transaction.value).toEqual(1000);
    expect(transaction.category_id).toEqual(category.id);
    expect(transaction.user_id).toEqual("user-id");
  });
});
