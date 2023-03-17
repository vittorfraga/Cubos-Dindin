import UserToken from "@database/entities/UserToken";

export interface IUsertokenRepository {
  findByToken(token: string): Promise<UserToken | undefined>;
  generate(user_id: string): Promise<UserToken>;
}
