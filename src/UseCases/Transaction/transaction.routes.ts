import { IsAuthenticated } from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { createTransactionController } from "./CreateTransaction";
import { deleteTransactionController } from "./DeleteTransaction";
import { listAllTransactionController } from "./ListAllTransactions";
import { updateTransactionController } from "./UpdateTransaction";

const transactionRoutes = Router();

transactionRoutes.post("/transaction", IsAuthenticated, (req, res) => {
  return createTransactionController.handle(req, res);
});

transactionRoutes.put("/transaction/:id", IsAuthenticated, (req, res) => {
  return updateTransactionController.handle(req, res);
});

transactionRoutes.get("/transaction", IsAuthenticated, (req, res) => {
  return listAllTransactionController.handle(req, res);
});

transactionRoutes.delete("/transaction/:id", IsAuthenticated, (req, res) => {
  return deleteTransactionController.handle(req, res);
});

export default transactionRoutes;
