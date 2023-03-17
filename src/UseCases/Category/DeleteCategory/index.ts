import { TypeOrmCategoryRepository } from "src/repositories/implementations/TypeOrmCategoryRepository";
import { DeleteCategoryController } from "./DeleteCategoryController";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

const typeOrmCategoryRepository = new TypeOrmCategoryRepository();

const deleteCategoryUseCase = new DeleteCategoryUseCase(
  typeOrmCategoryRepository
);
const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase
);

export { deleteCategoryUseCase, deleteCategoryController };
