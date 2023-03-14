import { Request, Response } from "express";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

export class CreateSessionController {
  constructor(private createSessionUseCase: CreateSessionUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const user = await this.createSessionUseCase.execute({ email, password });

    return res.status(201).json(user);
  }
}
