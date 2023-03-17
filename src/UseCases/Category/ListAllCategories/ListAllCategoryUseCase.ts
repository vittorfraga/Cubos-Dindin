import AppError from "@shared/errors/AppError";
import { Category } from "src/database/entities/Category";
import { ICategoryRepository } from "src/repositories/ICategoryRepository";

export class ListAllCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll();

    if (!categories) {
      throw new AppError("Categories not found.", 404);
    }

    return categories;
  }
}
