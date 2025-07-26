import { Request, Response } from "express";
import { CreateDespesaService } from "../services/createDespesa.service";
import { GetAllDespesasService } from "../services/getAllDespesas.service";
import { deleteDespesaService } from "../services/deleteDespesa.service";
import { AtualizarDespesaService } from "../services/atualizarDespesa.service";
import { iReturnDespesa } from "../schemas/despesas.schemas";
import { GetDespesasByIdService } from "../services/getDespesaById.service";


export const CreateDespesaController = async(req:Request, res:Response):Promise<Response> =>{
    const despesaData = req.body
    const despesa = await CreateDespesaService(despesaData)

    return res.status(200).json(despesa)

}
export const GetAllDespesasController = async(req:Request, res:Response):Promise<Response> => {
    const despesas = await GetAllDespesasService()
    
    return res.status(200).json(despesas)
}
export const GetDespesasByIdController = async(req:Request, res:Response):Promise<Response> => {
    const despesaId = req.params.id
    const despesa = await GetDespesasByIdService(despesaId)

    return res.status(200).json(despesa)
}
export const deleteDespesasController = async(req:Request, res:Response):Promise<Response> => {
    const despesaId:string = req.params.id
    await deleteDespesaService(despesaId)

    return res.status(204).send()
}
export const AtualizarDespesasController = async(req:Request, res: Response):Promise<Response> => {
    const despesaData = req.body
    const despesaId = req.params.id
    const despesa:iReturnDespesa = await AtualizarDespesaService(despesaData, despesaId)

    return res.status(200).json(despesa)
}