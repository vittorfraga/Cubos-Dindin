import AppError from "@shared/errors/AppError";
import { Category } from "src/database/entities/Category";
import { ICategoryRepository } from "src/repositories/ICategoryRepository";

interface CreateCategoryDTO {
  name: string;
}

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name }: CreateCategoryDTO) {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!", 400);
    }

    const category = new Category();

    category.name = name;

    await this.categoryRepository.save(category);
  }
}
