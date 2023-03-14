import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    if (!id) {
      throw new AppError("Invalid ID.", 400);
    }

    await this.deleteUserUseCase.execute({ id });

    return res.status(204).send();
  }
}
