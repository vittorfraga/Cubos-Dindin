import "dotenv/config";

import AppError from "@shared/errors/AppError";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUsersRepository } from "src/repositories/IUsersRepository";
import { TypeOrmUsersRepository } from "src/repositories/implementations/TypeormUsersRepository";

type JwtPayload = {
  id: string;
};

const usersRepository: IUsersRepository = new TypeOrmUsersRepository();

export const IsAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) throw new AppError("Não autorizado!", 401);

  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.SECRET ?? "") as JwtPayload;

  const user = await usersRepository.findById(id);
  if (!user) {
    throw new AppError("Não autorizado!", 401);
  }

  const { password: _, ...loggedUser } = user;

  req.user = loggedUser;

  next();
};
