import AppError from "@shared/errors/AppError";
import { ICategoryRepository } from "src/repositories/ICategoryRepository";

interface IRequest {
  id: string;
}

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError("Category not found.", 404);
    }

    await this.categoryRepository.delete(id);
  }
}
