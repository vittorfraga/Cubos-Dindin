import { TypeOrmUsersRepository } from "src/repositories/implementations/TypeormUsersRepository";
import { CreateUserController } from "./CreateTransactionController";
import { CreateUserUseCase } from "./CreateTransactionUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository();

const createUserUseCase = new CreateUserUseCase(typeOrmUsersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
