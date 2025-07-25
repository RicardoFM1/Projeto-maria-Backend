import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Vendas } from "../entities/vendas.entitie"
import { Doces } from "../entities/doces.entitie"
import { iReturnDoce } from "../schemas/doces.schemas"
import { iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas"
import { AppError } from "../errors"


export const GetProdutoVendaByIdService = async(produtoVendaId:string):Promise<iReturnVenda> => {
     const vendasRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas)

     const produtoVendaFind: Vendas | null = await vendasRepository.findOne(
        {
            where:{
                produto:{
                    id: parseInt(produtoVendaId)
                }
            },
            relations:{
                produto: true
            }
        }
     )
     if(!produtoVendaFind){
        throw new AppError("Produto na relação venda não encontrado")
     }
     const produtoVenda = returnVendaSchema.parse(produtoVendaFind)

     return produtoVenda
}