import { Request, Response } from "express";
import SendForgotPasswordUseCase from "./SendForgotPasswordUseCase";

export default class SendForgotPasswordController {
  constructor(private sendForgotPasswordUseCase: SendForgotPasswordUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    await this.sendForgotPasswordUseCase.execute({ email });

    return res.status(204).json();
  }
}
