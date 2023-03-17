import { UpdateUserUseCase } from "./UpdateUserUseCase";
import AppError from "@shared/errors/AppError";
import { TestUsersRepository } from "@repositories/testRepositories/testUsersRepository";

let testUsersRepository: TestUsersRepository;
let updateUser: UpdateUserUseCase;

describe("UpdateUserUseCase", () => {
  beforeEach(() => {
    testUsersRepository = new TestUsersRepository();
    updateUser = new UpdateUserUseCase(testUsersRepository);
  });

  it("should be able to update an existing user", async () => {
    const user = await testUsersRepository.create({
      name: "Carlos Vitor",
      email: "teste@teste.com",
      password: "12345678",
    });

    const updatedUser = await updateUser.execute({
      id: user.id,
      name: "Carlos Eduardo",
      email: "teste2@teste.com",
      password: "87654321",
    });

    expect(updatedUser.name).toBe("Carlos Eduardo");
    expect(updatedUser.email).toBe("teste2@teste.com");
  });

  it("should not be able to update a non-existing user", async () => {
    await expect(
      updateUser.execute({
        id: "non-existing-id",
        name: "Carlos Eduardo",
        email: "teste2@teste.com",
        password: "87654321",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update a user email to an existing email", async () => {
    const user1 = await testUsersRepository.create({
      name: "Carlos Vitor",
      email: "teste1@teste.com",
      password: "12345678",
    });

    const user2 = await testUsersRepository.create({
      name: "Carlos Eduardo",
      email: "teste2@teste.com",
      password: "12345678",
    });

    await expect(
      updateUser.execute({
        id: user1.id,
        name: "Carlos Vitor",
        email: "teste2@teste.com",
        password: "12345678",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
