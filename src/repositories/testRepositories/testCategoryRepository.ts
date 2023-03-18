import { v4 as uuid } from "uuid";

import { ICategoryRepository } from "@repositories/ICategoryRepository";
import { Category } from "@database/entities/Category";

export class TestCategoryRepository implements Partial<ICategoryRepository> {
  private categories: Category[] = [];

  async create(name: string): Promise<Category> {
    const category = new Category();

    category.id = uuid();
    category.name = name;

    this.categories.push(category);

    return category;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.name === name);

    return category ?? undefined;
  }

  async findById(id: string): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.id === id);
    return category;
  }

  async save(category: Category): Promise<void> {
    this.categories.push(category);
  }

  async delete(id: string): Promise<void> {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }
}
