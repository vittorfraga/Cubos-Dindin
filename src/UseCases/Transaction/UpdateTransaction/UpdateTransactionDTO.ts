import { CreateTransactionDTO } from "../CreateTransaction/CreateTransactionDTO";

export interface UpdateTransactionDTO extends CreateTransactionDTO {
  id: string;
  user_id: string;
}
