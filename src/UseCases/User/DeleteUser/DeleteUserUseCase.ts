import { IUsersRepository } from "@repositories/IUsersRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    await this.usersRepository.delete(id);
  }
}
