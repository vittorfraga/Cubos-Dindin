import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import { TestUsersRepository } from "@repositories/testRepositories/testUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

let testUsersRepository: TestUsersRepository;
let createUser: CreateUserUseCase;

describe("CreateUserUseCase", () => {
  beforeEach(() => {
    testUsersRepository = new TestUsersRepository();
    createUser = new CreateUserUseCase(testUsersRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await createUser.execute({
      name: "Carlos Vitor",
      email: "teste@teste.com",
      password: "12345678",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create two users with the same email", async () => {
    await createUser.execute({
      name: "Carlos Vitor",
      email: "teste@teste.com",
      password: "12345678",
    });

    expect(
      createUser.execute({
        name: "Carlos Vitor",
        email: "teste@teste.com",
        password: "12345678",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
