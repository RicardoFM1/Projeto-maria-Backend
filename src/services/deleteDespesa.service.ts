import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Despesas } from "../entities/despesas.entitie"
import { AppError } from "../errors"


export const deleteDespesaService = async(despesaId:string):Promise<void> => {
 const despesaRepository:Repository<Despesas> = AppDataSource.getRepository(Despesas)
 const despesaFind = await despesaRepository.findOne(
    {
        where: {
            id: parseInt(despesaId)
        }
    }
 )
 if(!despesaFind){
    throw new AppError("Despesa não encontrada!")
 }
 await despesaRepository.remove(despesaFind)
}