import { Request, Response } from "express";
import ResetPasswordUseCase from "./ResetPasswordUseCase";

export default class ResetPasswordController {
  constructor(private resetPasswordUseCase: ResetPasswordUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;

    await this.resetPasswordUseCase.execute({ password, token });

    return res.status(204).json();
  }
}
