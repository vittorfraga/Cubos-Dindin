import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    if (!id) {
      throw new AppError("Unauthorized", 401);
    }

    const user = await this.listUserUseCase.execute({ id });

    return res.status(201).json(user);
  }
}
