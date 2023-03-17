import { TypeOrmUsersRepository } from "src/repositories/implementations/TypeormUsersRepository";
import TypeOrmUserTokenRepository from "src/repositories/implementations/TypeOrmUserTokenRepository";
import SendForgotPasswordController from "./SendForgotPasswordController";
import SendForgotPasswordUseCase from "./SendForgotPasswordUseCase";

const typeOrmUserTokenRepository = new TypeOrmUserTokenRepository();
const typeOrmUsersRepository = new TypeOrmUsersRepository();

const sendForgotPasswordUseCase = new SendForgotPasswordUseCase(
  typeOrmUsersRepository,
  typeOrmUserTokenRepository
);
const sendForgotPasswordController = new SendForgotPasswordController(
  sendForgotPasswordUseCase
);

export { sendForgotPasswordController, sendForgotPasswordUseCase };
