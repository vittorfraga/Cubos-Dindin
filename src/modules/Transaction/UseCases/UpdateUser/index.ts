import { TypeOrmUsersRepository } from "src/repositories/implementations/TypeormUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(typeOrmUsersRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
