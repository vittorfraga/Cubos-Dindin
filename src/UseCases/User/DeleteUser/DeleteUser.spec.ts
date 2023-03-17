import { TestUsersRepository } from "@repositories/testRepositories/testUsersRepository";
import AppError from "@shared/errors/AppError";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

let testUsersRepository: TestUsersRepository;
let deleteUser: DeleteUserUseCase;

describe("DeleteUserUseCase", () => {
  beforeEach(() => {
    testUsersRepository = new TestUsersRepository();
    deleteUser = new DeleteUserUseCase(testUsersRepository);
  });

  it("should be able to delete a user", async () => {
    const user = await testUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    await deleteUser.execute({ id: user.id });

    const deletedUser = await testUsersRepository.findById(user.id);

    expect(deletedUser).toBeUndefined();
  });

  it("should not be able to list a non-existing user", async () => {
    await expect(
      deleteUser.execute({ id: "non-existing-id" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
