import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { ListAllTransactionsUseCase } from "./ListAllTransactionsUseCase";

export class ListAllTransactionsController {
  constructor(private listAllTransactionsUseCase: ListAllTransactionsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    if (!user_id) {
      throw new AppError("User ID not provided", 400);
    }

    const transactions = await this.listAllTransactionsUseCase.execute(user_id);

    return res.json(transactions);
  }
}
