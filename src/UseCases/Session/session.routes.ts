import { Router } from "express";
import { createSessionController } from "./CreateSession";
import { resetPasswordController } from "./ResetPassword";
import { sendForgotPasswordController } from "./SendForgotPassword";

const sessionRoutes = Router();

sessionRoutes.post("/login", (req, res) => {
  return createSessionController.handle(req, res);
});

sessionRoutes.post("/forgot", (req, res) => {
  return sendForgotPasswordController.handle(req, res);
});

sessionRoutes.post("/reset", (req, res) => {
  return resetPasswordController.handle(req, res);
});

export default sessionRoutes;
