import { AppDataSource } from "src/database/dataSource";
import { User } from "src/database/entities/User";

import { IUsersRepository } from "../IUsersRepository";

export class TypeOrmUsersRepository implements IUsersRepository {
  private userRepository = AppDataSource.manager.getRepository(User);

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (user === null) {
      return undefined;
    }

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (user === null) {
      return undefined;
    }

    return user;
  }

  async save(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
