import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

export class CreateTransactionController {
  constructor(private createTransactionsUseCase: CreateTransactionUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { type, description, value, category_id } = req.body;
    const user_id = req.user.id;

    if (!user_id) {
      throw new AppError("Unauthorized!", 401);
    }

    if (
      !["entrada", "income", "saída", "saida", "outcome"].includes(
        type.toLowerCase()
      ) &&
      !["in", "out"].includes(type.toLowerCase())
    ) {
      throw new AppError("Invalid transaction type", 400);
    }

    const transaction = await this.createTransactionsUseCase.execute({
      type,
      description,
      value,
      category_id,
      user_id,
    });

    return res.status(201).json(transaction);
  }
}
