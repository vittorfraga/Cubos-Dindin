import { CreateUserDTO } from "../CreateTransaction/CreateTransactionDTO";

export interface UpdateUserDTO extends CreateUserDTO {
  id: string;
}
