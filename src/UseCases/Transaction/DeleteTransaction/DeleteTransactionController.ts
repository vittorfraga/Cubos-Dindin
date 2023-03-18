import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase";

export class DeleteTransactionController {
  constructor(private deleteTransactionUseCase: DeleteTransactionUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const { id } = req.params;

    if (!id) {
      throw new AppError("Invalid ID.", 400);
    }

    if (!user_id) {
      throw new AppError("Invalid user ID.", 400);
    }

    await this.deleteTransactionUseCase.execute(id, user_id);

    return res.status(204).send();
  }
}
