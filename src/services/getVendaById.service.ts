import { Repository } from "typeorm";
import { iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas";
import { Vendas } from "../entities/vendas.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const GetVendaByIdService = async(vendaId:string):Promise<iReturnVenda> => {
    const vendasRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas)

    const vendaFind:Vendas | null = await vendasRepository.findOne(
        {
            where:{
                id: parseInt(vendaId)
            },
            relations:{
                produto:true
            }
        }
    )
    if(!vendaFind){
        throw new AppError("Venda não encontrada!")
    }
    const venda = returnVendaSchema.parse(vendaFind)
    return venda
}