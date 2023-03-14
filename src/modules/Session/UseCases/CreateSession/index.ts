import { TypeOrmUsersRepository } from "src/repositories/implementations/TypeormUsersRepository";
import { CreateSessionController } from "./CreateSessionController";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository();

const createSessionUseCase = new CreateSessionUseCase(typeOrmUsersRepository);
const createSessionController = new CreateSessionController(
  createSessionUseCase
);

export { createSessionController, createSessionUseCase };
