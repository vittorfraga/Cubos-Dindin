import { TypeOrmUsersRepository } from "@repositories/implementations/TypeormUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(typeOrmUsersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUserController };
