import { Router } from "express";
import { AtualizarVendaController, CreateVendaController, DeleteVendasController, GetAllVendasController, GetProdutoVendaByIdController, GetResumoPorProdutoController, getResumoVendasController, GetVendaByIdController } from "../controllers/vendas.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { criarVendaSchema } from "../schemas/vendas.schemas";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";



export const vendasRoutes:Router = Router()

vendasRoutes.post("", validateDataMiddleware(criarVendaSchema), CreateVendaController)
vendasRoutes.get("", GetAllVendasController)
vendasRoutes.get("/resumo", getResumoVendasController)
vendasRoutes.get("/resumo/:id", GetResumoPorProdutoController);
vendasRoutes.get("/:id", GetVendaByIdController)
vendasRoutes.get("/produto/:id", GetProdutoVendaByIdController)
vendasRoutes.delete("/:id", validateTokenMiddleware, DeleteVendasController)
vendasRoutes.patch("/:id", validateTokenMiddleware, AtualizarVendaController)