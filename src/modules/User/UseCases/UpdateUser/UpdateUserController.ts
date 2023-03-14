import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const { id } = req.user;

    if (!id) {
      throw new AppError("Unauthorized", 401);
    }

    await this.updateUserUseCase.execute({ id, name, email, password });

    return res.status(201).send();
  }
}
