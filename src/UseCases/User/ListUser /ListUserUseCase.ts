import { IUsersRepository } from "@repositories/IUsersRepository";
import AppError from "@shared/errors/AppError";

import { ListUserDTO } from "./ListUserDTO";

class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<ListUserDTO> {
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
