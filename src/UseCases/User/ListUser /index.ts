import { TypeOrmUsersRepository } from "@repositories/implementations/TypeormUsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository();

const listUserUseCase = new ListUserUseCase(typeOrmUsersRepository);
const listUserController = new ListUserController(listUserUseCase);

export { listUserUseCase, listUserController };
