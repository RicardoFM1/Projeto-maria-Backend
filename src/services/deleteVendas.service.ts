import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Despesas } from "../entities/despesas.entitie"
import { AppError } from "../errors"
import { Vendas } from "../entities/vendas.entitie"


export const deleteVendasService = async(vendasId:string):Promise<void> => {
 const vendasRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas)
 const vendasFind = await vendasRepository.findOne(
    {
        where: {
            id: parseInt(vendasId)
        }
    }
 )
 if(!vendasFind){
    throw new AppError("Venda não encontrada!")
 }
 await vendasRepository.remove(vendasFind)
}