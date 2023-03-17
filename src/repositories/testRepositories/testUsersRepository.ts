import { v4 as uuid } from "uuid";

import { CreateUserDTO } from "@UseCases/User/CreateUser/CreateUserDTO";
import { IUsersRepository } from "@repositories/IUsersRepository";
import { User } from "@database/entities/User";
import { UpdateUserDTO } from "@UseCases/User/UpdateUser/UpdateUserDTO";

export class TestUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = new User();

    user.id = uuid();
    user.name = name;
    user.email = email;
    user.password = password;

    this.users.push(user);

    return user;
  }
  async update({
    id,
    name,
    email,
    password,
  }: UpdateUserDTO): Promise<User | undefined> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return undefined;
    }

    const updatedUser = {
      ...this.users[userIndex],
      name,
      email,
      password,
    };

    this.users[userIndex] = updatedUser;

    return updatedUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
