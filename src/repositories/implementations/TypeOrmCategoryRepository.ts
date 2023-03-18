import { AppDataSource } from "@database/dataSource";
import { Category } from "@database/entities/Category";
import { ICategoryRepository } from "@repositories/ICategoryRepository";

export class TypeOrmCategoryRepository implements ICategoryRepository {
  private categoryRepository = AppDataSource.manager.getRepository(Category);

  async create(name: string): Promise<Category> {
    const category = await this.categoryRepository.create({ name });

    await this.categoryRepository.save(category);

    return category;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.categoryRepository.findOne({ where: { name } });

    if (category === null) {
      return undefined;
    }

    return category;
  }

  async findById(id: string): Promise<Category | undefined> {
    const category = await this.categoryRepository.findOne({ where: { id } });

    if (category === null) {
      return undefined;
    }

    return category;
  }

  async save(category: Category): Promise<void> {
    await this.categoryRepository.save(category);
  }

  async delete(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
