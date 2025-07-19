import { Router } from "express";
import { criarDoceController } from "../controllers/doces.controller";


export const docesRoutes:Router = Router()

docesRoutes.get("")
docesRoutes.post("", criarDoceController)
