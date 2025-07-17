import { Router } from "express";
import { createUserController, getAllUsersController, usuarioRetrieveController } from "../controllers/usuarios.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { createUserSchema } from "../schemas/usuarios.schemas";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";

export const usuariosRoutes:Router = Router()

usuariosRoutes.post("",validateDataMiddleware(createUserSchema), createUserController)
usuariosRoutes.get("",getAllUsersController)
usuariosRoutes.get("/retrieve",validateTokenMiddleware,usuarioRetrieveController)