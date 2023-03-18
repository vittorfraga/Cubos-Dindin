import { Router } from "express";
import { createCategoryController } from "./CreateCategory";
import { deleteCategoryController } from "./DeleteCategory";

const categoryRoutes = Router();

categoryRoutes.post("/category", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoryRoutes.delete("/category", (req, res) => {
  return deleteCategoryController.handle(req, res);
});

export default categoryRoutes;
