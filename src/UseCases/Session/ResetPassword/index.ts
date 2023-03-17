import { TypeOrmUsersRepository } from "src/repositories/implementations/TypeormUsersRepository";
import TypeOrmUserTokenRepository from "src/repositories/implementations/TypeOrmUserTokenRepository";
import ResetPasswordController from "./ResetPasswordController";
import ResetPasswordUseCase from "./ResetPasswordUseCase";

const typeOrmUserTokenRepository = new TypeOrmUserTokenRepository();
const typeOrmUsersRepository = new TypeOrmUsersRepository();

const resetPaswordUseCase = new ResetPasswordUseCase(
  typeOrmUsersRepository,
  typeOrmUserTokenRepository
);
const resetPasswordController = new ResetPasswordController(
  resetPaswordUseCase
);

export { resetPasswordController, resetPaswordUseCase };
