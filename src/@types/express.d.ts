import { User } from "src/database/entities/User";

declare global {
  namespace Express {
    export interface Request {
      user: Partial<User>;
    }
  }
}
