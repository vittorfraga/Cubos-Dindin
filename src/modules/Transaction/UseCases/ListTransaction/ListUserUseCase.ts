import AppError from "@shared/errors/AppError";
import { IUsersRepository } from "src/repositories/IUsersRepository";
import { ListUserDTO } from "./ListUserDTO";

interface IRequest {
  id: string;
}

class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id }: IRequest): Promise<ListUserDTO> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    const userProfile = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return userProfile;
  }
}

export { ListUserUseCase };
