import { TestUsersRepository } from "@repositories/testRepositories/testUsersRepository";
import AppError from "@shared/errors/AppError";
import { ListUserUseCase } from "./ListUserUseCase";

let testUsersRepository: TestUsersRepository;
let listUser: ListUserUseCase;

describe("ListUserUseCase", () => {
  beforeEach(() => {
    testUsersRepository = new TestUsersRepository();
    listUser = new ListUserUseCase(testUsersRepository);
  });

  it("should be able to list a user", async () => {
    const createdUser = await testUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const userProfile = await listUser.execute(createdUser.id);

    expect(userProfile).toMatchObject({
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
    });
  });

  it("should not be able to list a non-existing user", async () => {
    await expect(listUser.execute("non-existing-id")).rejects.toBeInstanceOf(
      AppError
    );
  });
});
