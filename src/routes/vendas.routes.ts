import { Router } from "express";
import { CreateVendaController, GetAllVendasController } from "../controllers/vendas.controllers";



export const vendasRoutes:Router = Router()

vendasRoutes.get("", GetAllVendasController)
vendasRoutes.post("", CreateVendaController)