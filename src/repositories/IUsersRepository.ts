import { User } from "@database/entities/User";
import { CreateUserDTO } from "@UseCases/User/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "@UseCases/User/UpdateUser/UpdateUserDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  delete(id: string): Promise<void>;
  save(user: User): Promise<void>;
  create(user: CreateUserDTO): Promise<User>;
  update(user: UpdateUserDTO): Promise<User | undefined>;
}
