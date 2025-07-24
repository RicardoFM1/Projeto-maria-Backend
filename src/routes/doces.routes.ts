import { Router } from "express";
import { AtualizarDoceController, criarDoceController, DeleteDocesController, getAllDocesControllers } from "../controllers/doces.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { CriarDoceSchema } from "../schemas/doces.schemas";


export const docesRoutes:Router = Router()

docesRoutes.get("", getAllDocesControllers)
docesRoutes.post("", validateDataMiddleware(CriarDoceSchema), criarDoceController)
docesRoutes.delete("/:id", DeleteDocesController)
docesRoutes.patch("/:id", AtualizarDoceController)