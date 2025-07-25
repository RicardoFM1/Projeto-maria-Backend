import { Router } from "express";
import { AtualizarDoceController, criarDoceController, getAllDocesControllers, GetDocesByIdController } from "../controllers/doces.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { CriarDoceSchema } from "../schemas/doces.schemas";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";


export const docesRoutes:Router = Router()

docesRoutes.post("", validateDataMiddleware(CriarDoceSchema), criarDoceController)
docesRoutes.get("", getAllDocesControllers)
docesRoutes.get("/:id", GetDocesByIdController)
// docesRoutes.delete("/:id", validateTokenMiddleware, DeleteDocesController)  FAZER PATCH AO INVÉS DE DELETE!
docesRoutes.patch("/:id", validateTokenMiddleware, AtualizarDoceController)