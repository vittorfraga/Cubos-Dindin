import categoryRoutes from "@UseCases/Category/category.routes";
import sessionRoutes from "@UseCases/Session/session.routes";
import transactionRoutes from "@UseCases/Transaction/transaction.routes";
import userRoutes from "@UseCases/User/user.routes";
import { Router } from "express";

const routes = Router();

routes.use(userRoutes);
routes.use(sessionRoutes);
routes.use(categoryRoutes);
routes.use(transactionRoutes);

export default routes;
