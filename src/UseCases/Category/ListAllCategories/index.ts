import { TypeOrmCategoryRepository } from "src/repositories/implementations/TypeOrmCategoryRepository";
import { ListAllCategoryController } from "./ListAllCategoryController";
import { ListAllCategoryUseCase } from "./ListAllCategoryUseCase";

const typeOrmCategoryRepository = new TypeOrmCategoryRepository();

const listAllCategoriesUseCase = new ListAllCategoryUseCase(
  typeOrmCategoryRepository
);
const listAllCategoriesController = new ListAllCategoryController(
  listAllCategoriesUseCase
);

export { listAllCategoriesUseCase, listAllCategoriesController };
