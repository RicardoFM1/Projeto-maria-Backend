import { Repository } from "typeorm";
import { iReturnDoce } from "../schemas/doces.schemas";
import { iCriarVenda, iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas";
import { Vendas } from "../entities/vendas.entitie";
import { AppDataSource } from "../data-source";


export const AtualizarVendaService = async(vendaData:iCriarVenda, vendaId:string):Promise<iReturnVenda> => {
    const vendaRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas)
    const vendaFind:Vendas|null = await vendaRepository.findOne(
        {
            where:{
                id: parseInt(vendaId)
            },
            relations:{
                produto:true
            }
        }
    )
    const vendaPatch = vendaRepository.create({
        ...vendaFind,
        ...vendaData
    })
    await vendaRepository.save(vendaPatch)
    const venda = returnVendaSchema.parse(vendaPatch)

    return venda

}