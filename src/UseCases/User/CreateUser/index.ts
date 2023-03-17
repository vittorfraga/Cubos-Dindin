import { TypeOrmUsersRepository } from "@repositories/implementations/TypeormUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository();

const createUserUseCase = new CreateUserUseCase(typeOrmUsersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
