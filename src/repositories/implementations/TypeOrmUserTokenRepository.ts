import { AppDataSource } from "src/database/dataSource";
import UserToken from "src/database/entities/UserToken";
import { IUsertokenRepository } from "../IUsertokenRepository";

class TypeOrmUserTokenRepository implements IUsertokenRepository {
  private userTokensRepository = AppDataSource.manager.getRepository(UserToken);

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.userTokensRepository.findOne({
      where: { token },
    });

    if (userToken === null) {
      return undefined;
    }
    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.userTokensRepository.create({ user_id });

    await this.userTokensRepository.save(userToken);

    return userToken;
  }
}

export default TypeOrmUserTokenRepository;
