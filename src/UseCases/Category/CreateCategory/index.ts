import { TypeOrmCategoryRepository } from "src/repositories/implementations/TypeOrmCategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const typeOrmCategoryRepository = new TypeOrmCategoryRepository();

const createCategoryUseCase = new CreateCategoryUseCase(
  typeOrmCategoryRepository
);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryUseCase, createCategoryController };
