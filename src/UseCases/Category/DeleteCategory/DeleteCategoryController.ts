import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

export class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    if (!id) {
      throw new AppError("Category not found!", 404);
    }

    await this.deleteCategoryUseCase.execute({ id });

    return res.status(204).send();
  }
}
