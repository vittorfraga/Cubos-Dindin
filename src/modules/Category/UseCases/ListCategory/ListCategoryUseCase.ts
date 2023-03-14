import AppError from "@shared/errors/AppError";
import { Category } from "src/database/entities/Category";
import { ICategoryRepository } from "src/repositories/ICategoryRepository";

interface IRequest {
  name: string;
}

export class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name }: IRequest): Promise<Category> {
    const category = await this.categoryRepository.findByName(name);

    if (!category) {
      throw new AppError("Category not found.", 404);
    }

    return category;
  }
}
