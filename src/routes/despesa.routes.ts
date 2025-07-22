import { Router } from "express";
import { CreateDespesaController, deleteDespesasController, GetAllDespesasController } from "../controllers/despesas.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { CreateDespesaSchema } from "../schemas/despesas.schemas";


export const despesaRoutes:Router = Router()

despesaRoutes.post("", validateDataMiddleware(CreateDespesaSchema), CreateDespesaController)
despesaRoutes.get("", GetAllDespesasController)
despesaRoutes.delete("/:id", deleteDespesasController)
despesaRoutes.patch("")
