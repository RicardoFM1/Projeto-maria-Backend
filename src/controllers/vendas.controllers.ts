import { Request, Response } from "express";
import { iCriarVenda, iReturnVenda } from "../schemas/vendas.schemas";
import { CreateVendaService } from "../services/createVenda.service";
import { GetAllVendasService } from "../services/getAllVendas.service";


export const CreateVendaController = async(req:Request, res:Response):Promise<Response> =>{
    const vendaData:iCriarVenda = req.body
    const venda:iReturnVenda = await CreateVendaService(vendaData)
    return res.status(200).json(venda)
}

    export const GetAllVendasController = async(req:Request, res:Response):Promise<Response> =>{
        
        const venda = await GetAllVendasService()

        return res.status(200).json(venda)
    }
    export const deleteVendasController = async(req:Request, res:Response):Promise<Response> => {
        const vendasId:string = req.params.id
        await deleteVendasService(vendasId)
    
        return res.status(204).send()
    }