import { TypeOrmCategoryRepository } from "src/repositories/implementations/TypeOrmCategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const typeOrmCategoryRepository = new TypeOrmCategoryRepository();

const listCategoryUseCase = new ListCategoryUseCase(typeOrmCategoryRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryUseCase, listCategoryController };
