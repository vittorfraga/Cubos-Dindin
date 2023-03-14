import { User } from "src/database/entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  delete(id: string): Promise<void>;
  save(user: User): Promise<void>;
}
