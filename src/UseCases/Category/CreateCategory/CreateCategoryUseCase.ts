import AppError from "@shared/errors/AppError";
import { Category } from "src/database/entities/Category";
import { ICategoryRepository } from "src/repositories/ICategoryRepository";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(name: string) {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!", 400);
    }

    const category = await this.categoryRepository.create(name);

    return category;
  }
}
