import { Category } from "src/database/entities/Category";

export interface ICategoryRepository {
  findByName(name: string): Promise<Category | undefined>;
  findById(id: string): Promise<Category | undefined>;
  delete(id: string): Promise<void>;
  save(category: Category): Promise<void>;
  findAll(): Promise<Category[]>;
}
