import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const category = await this.listCategoryUseCase.execute({ name });

    return res.status(201).json(category);
  }
}
