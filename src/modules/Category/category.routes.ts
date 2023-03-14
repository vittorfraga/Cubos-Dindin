import { Router } from "express";
import { createCategoryController } from "./UseCases/CreateCategory";
import { deleteCategoryController } from "./UseCases/DeleteCategory";
import { listAllCategoriesController } from "./UseCases/ListAllCategories";
import { listCategoryController } from "./UseCases/ListCategory";

const categoryRoutes = Router();

categoryRoutes.post("/category", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoryRoutes.get("/categories", (req, res) => {
  return listAllCategoriesController.handle(req, res);
});

categoryRoutes.get("/category", (req, res) => {
  return listCategoryController.handle(req, res);
});

categoryRoutes.delete("/category", (req, res) => {
  return deleteCategoryController.handle(req, res);
});

export default categoryRoutes;
