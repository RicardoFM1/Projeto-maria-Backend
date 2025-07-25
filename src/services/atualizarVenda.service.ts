import { Repository } from "typeorm";
import { iReturnDoce } from "../schemas/doces.schemas";
import { iCriarVenda, iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas";
import { Vendas } from "../entities/vendas.entitie";
import { AppDataSource } from "../data-source";
import { Doces } from "../entities/doces.entitie";
import { AppError } from "../errors";


export const AtualizarVendaService = async(vendaData:iCriarVenda, vendaId:string):Promise<iReturnVenda> => {
    const vendaRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas)
    const doceRepository:Repository<Doces> = AppDataSource.getRepository(Doces)
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
    if(!vendaFind){
        throw new AppError("Não foi possível encontrar nenhuma venda")
    }
    const produtoFind:Doces|null = await doceRepository.findOne(
        {
            where:{
                id: vendaFind.produto ? vendaFind.produto.id : 0
            }
        }
    )
    const vendaPatch = vendaRepository.create({
        ...vendaFind,
        ...vendaData
    })
    await vendaRepository.save(vendaPatch)
    // vendaFind?.produto.id
    const venda = returnVendaSchema.parse({...vendaPatch,produto:produtoFind})

    return venda

}