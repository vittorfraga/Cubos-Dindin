import { Router } from "express";
import { createSessionController } from "./UseCases/CreateSession";

const sessionRoutes = Router();

sessionRoutes.post("/login", (req, res) => {
  return createSessionController.handle(req, res);
});

export default sessionRoutes;
