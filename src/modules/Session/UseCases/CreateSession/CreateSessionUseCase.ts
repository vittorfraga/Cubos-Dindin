import AppError from "@shared/errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "src/repositories/IUsersRepository";
import { ILoggedUser, IResponse, LoginDTO } from "./CreateSessionDTO";

export class CreateSessionUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: LoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User not found!", 404);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password invalid!", 401);
    }

    if (!process.env.SECRET) {
      throw new AppError("Secret not found", 404);
    }

    const token = sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    );

    const loggedUser: ILoggedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return { ...loggedUser, token };
  }
}
