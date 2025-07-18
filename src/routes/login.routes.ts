import { Router } from "express";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { CreateLoginSchema } from "../schemas/login.schemas";
import { createLoginController } from "../controllers/login.controllers";

export const loginRoutes:Router = Router()

loginRoutes.post("",validateDataMiddleware(CreateLoginSchema),createLoginController)