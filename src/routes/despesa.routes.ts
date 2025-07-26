import { Router } from "express";
import { AtualizarDespesasController, CreateDespesaController, deleteDespesasController, GetAllDespesasController, GetDespesasByIdController } from "../controllers/despesas.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { CreateDespesaSchema } from "../schemas/despesas.schemas";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";


export const despesaRoutes:Router = Router()

despesaRoutes.post("", validateDataMiddleware(CreateDespesaSchema), CreateDespesaController)
despesaRoutes.get("", GetAllDespesasController)
despesaRoutes.get("/:id", GetDespesasByIdController)
despesaRoutes.delete("/:id", validateTokenMiddleware, deleteDespesasController)
despesaRoutes.patch("/:id", validateTokenMiddleware, AtualizarDespesasController)

