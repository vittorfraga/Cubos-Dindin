import { IsAuthenticated } from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { createUserController } from "./UseCases/CreateUser";
import { deleteUserController } from "./UseCases/DeleteUser";
import { listUserController } from "./UseCases/ListUser ";
import { updateUserController } from "./UseCases/UpdateUser";

const userRoutes = Router();

userRoutes.post("/user", (req, res) => {
  return createUserController.handle(req, res);
});

userRoutes.get("/user", IsAuthenticated, (req, res) => {
  return listUserController.handle(req, res);
});

userRoutes.put("/user", IsAuthenticated, (req, res) => {
  return updateUserController.handle(req, res);
});

userRoutes.delete("/user", IsAuthenticated, (req, res) => {
  return deleteUserController.handle(req, res);
});

export default userRoutes;
