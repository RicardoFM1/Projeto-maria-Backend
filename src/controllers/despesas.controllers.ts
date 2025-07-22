import { Request, Response } from "express";
import { CreateDespesaService } from "../services/createDespesa.service";
import { GetAllDespesasService } from "../services/getAllDespesas.service";


export const CreateDespesaController = async(req:Request, res:Response):Promise<Response> =>{
    const despesaData = req.body
    const despesa = await CreateDespesaService(despesaData)

    return res.status(200).json(despesa)

}
export const GetAllDespesasController = async(req:Request, res:Response):Promise<Response> => {
    const despesas = await GetAllDespesasService()
    
    return res.status(200).json(despesas)
}
export const deleteDespesasController = async(req:Request, res:Response):Promise<Response> => {
    const despesaId:string = req.params.id
    await deleteDespesaService(despesaId)

    return res.status(204).send()
}