import { Request, Response } from "express";
import { iCriarDoce, iReturnDoce } from "../schemas/doces.schemas";
import { CreateDoceService } from "../services/CreateDoce.service";
import { getAllDocesService } from "../services/getAllDoces.service";
import { deleteDoceService } from "../services/deleteDoces.service";
import { iReturnDespesa } from "../schemas/despesas.schemas";
import { AtualizarDoceService } from "../services/atualizarDoce.service";
import { GetDocesByIdService } from "../services/getDoceById.service";


export const criarDoceController = async(req:Request, res: Response):Promise<Response> =>{
    const doceData:iCriarDoce = req.body // faz a tipagem e dai recebe como valor o corpo da requisição mandado
    const doce:iReturnDoce = await CreateDoceService(doceData) // aqui pega o retorno dele e ai chama o serviço(onde entra 
    // no banco) e ai recebe como o parametro o de cima, que vem da requisição.
    return res.status(200).json(doce)
}
export const getAllDocesControllers = async(req:Request, res:Response):Promise<Response> =>{
    const doces = await getAllDocesService()
    
    return res.status(200).json(doces)
}
export const GetDocesByIdController = async(req:Request, res:Response):Promise<Response> =>{
    const doceId = req.params.id

    const doce = await GetDocesByIdService(doceId)

    return res.status(200).json(doce)
}

export const DeleteDocesController = async(req:Request, res:Response):Promise<Response> => {
    const docesId:string = req.params.id
    await deleteDoceService(docesId)

    return res.status(204).send()
}
export const AtualizarDoceController = async(req:Request, res:Response):Promise<Response> =>{
    const doceData = req.body
    const doceId = req.params.id

    const doce:iReturnDoce = await AtualizarDoceService(doceData, doceId)
    return res.status(200).json(doce)
}