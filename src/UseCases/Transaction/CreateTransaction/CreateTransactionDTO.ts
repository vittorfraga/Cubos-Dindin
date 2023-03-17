export interface CreateTransactionDTO {
  description: string;
  value: number;
  category_id: string;
  user_id: string;
  type: string;
}
