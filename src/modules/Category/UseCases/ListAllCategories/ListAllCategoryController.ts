import { Request, Response } from "express";
import { ListAllCategoryUseCase } from "./ListAllCategoryUseCase";

export class ListAllCategoryController {
  constructor(private listAllCategoryUseCase: ListAllCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const categories = await this.listAllCategoryUseCase.execute();

    return res.status(201).json(categories);
  }
}
