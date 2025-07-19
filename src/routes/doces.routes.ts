import { Router } from "express";
import { criarDoceController, getAllDocesControllers } from "../controllers/doces.controllers";


export const docesRoutes:Router = Router()

docesRoutes.get("", getAllDocesControllers)
docesRoutes.post("", criarDoceController)
