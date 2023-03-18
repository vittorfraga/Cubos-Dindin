import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    await this.createCategoryUseCase.execute(name);

    return res.status(201).json({ message: "Category successfully created!" });
  }
}
