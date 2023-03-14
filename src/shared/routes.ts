import categoryRoutes from "@modules/Category/category.routes";
import sessionRoutes from "@modules/Session/session.routes";
import userRoutes from "@modules/User/user.routes";
import { Router } from "express";

const routes = Router();

routes.use(userRoutes);
routes.use(sessionRoutes);
routes.use(categoryRoutes);

export default routes;
