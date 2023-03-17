import { isAfter, addHours } from "date-fns";
import AppError from "@shared/errors/AppError";
import { IUsersRepository } from "src/repositories/IUsersRepository";
import { IUsertokenRepository } from "src/repositories/IUsertokenRepository";
import { hash } from "bcrypt";

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private userTokenRepository: IUsertokenRepository
  ) {}

  async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new AppError("User Token not found!", 404);
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError("User not found!", 404);
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 1);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError("Token expired", 401);
    }

    user.password = await hash(password, 10);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordUseCase;
