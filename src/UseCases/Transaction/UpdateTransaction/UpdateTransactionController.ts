import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase";

export class UpdateTransactionController {
  constructor(private updateTransactionUseCase: UpdateTransactionUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { type, description, value, category_id } = req.body;
    const { id } = req.params;
    const user_id = req.user?.id;

    if (!user_id) {
      throw new AppError("Unauthorized", 401);
    }

    await this.updateTransactionUseCase.execute({
      id,
      type,
      description,
      value,
      category_id,
      user_id,
    });

    return res.status(201).send();
  }
}
