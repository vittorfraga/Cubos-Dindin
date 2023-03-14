import AppError from "@shared/errors/AppError";
import { hash } from "bcrypt";
import { User } from "src/database/entities/User";
import { IUsersRepository } from "src/repositories/IUsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: CreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!", 400);
    }

    const user = new User();

    const hashedPassword = await hash(password, 10);

    user.name = name;
    user.email = email;
    user.password = hashedPassword;

    await this.usersRepository.save(user);
  }
}
