import { Router } from "express";
import { IsAuthenticated } from "@shared/middlewares/isAuthenticated";
import { createUserController } from "./CreateUser";
import { listUserController } from "./ListUser ";
import { updateUserController } from "./UpdateUser";
import { deleteUserController } from "./DeleteUser";

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
