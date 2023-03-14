import { IsAuthenticated } from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { createTransactionController } from "./UseCases/CreateTransaction";

const transactionRoutes = Router();

transactionRoutes.post("/transaction", IsAuthenticated, (req, res) => {
  return createTransactionController.handle(req, res);
});

/*userRoutes.get("/user", IsAuthenticated, (req, res) => {
  return listUserController.handle(req, res);
});

userRoutes.put("/user", IsAuthenticated, (req, res) => {
  return updateUserController.handle(req, res);
});

userRoutes.delete("/user", IsAuthenticated, (req, res) => {
  return deleteUserController.handle(req, res);
});*/

export default transactionRoutes;
