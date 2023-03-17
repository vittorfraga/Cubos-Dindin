import { hash } from "bcrypt";

import { IUsersRepository } from "@repositories/IUsersRepository";
import AppError from "@shared/errors/AppError";
import { UpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id, name, email, password }: UpdateUserDTO) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User not found!", 404);
    }

    if (email !== user.email) {
      const userExists = await this.usersRepository.findByEmail(email);

      if (userExists) {
        throw new AppError("Email already exists", 400);
      }
    }

    const hashedPassword = await hash(password, 10);

    user.name = name;
    user.email = email;
    user.password = hashedPassword;

    await this.usersRepository.update(user);

    return user;
  }
}
