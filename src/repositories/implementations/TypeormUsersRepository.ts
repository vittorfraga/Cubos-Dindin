import { AppDataSource } from "@database/dataSource";
import { User } from "@database/entities/User";
import AppError from "@shared/errors/AppError";
import { CreateUserDTO } from "@UseCases/User/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "@UseCases/User/UpdateUser/UpdateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class TypeOrmUsersRepository implements IUsersRepository {
  private userRepository = AppDataSource.manager.getRepository(User);

  async create({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = this.userRepository.create({ name, email, password });

    await this.userRepository.save(user);

    return user;
  }

  async update({
    id,
    name,
    email,
    password,
  }: UpdateUserDTO): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return undefined;
    }

    user.name = name;
    user.email = email;
    user.password = password;

    await this.userRepository.save(user);

    return user;
  }

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
