import { Router } from "express";
import { CreateVendaController, deleteVendasController, GetAllVendasController } from "../controllers/vendas.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { criarVendaSchema } from "../schemas/vendas.schemas";



export const vendasRoutes:Router = Router()

vendasRoutes.get("", GetAllVendasController)
vendasRoutes.post("", validateDataMiddleware(criarVendaSchema), CreateVendaController)
vendasRoutes.delete("/:id", deleteVendasController)
vendasRoutes.patch("")