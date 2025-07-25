import { Repository } from "typeorm";
import { iReturnDespesa, ReturnDespesaSchema } from "../schemas/despesas.schemas";
import { Despesas } from "../entities/despesas.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const GetDespesasByIdService = async(despesaId:string):Promise<iReturnDespesa> => {
    const despesaRepository:Repository<Despesas> = AppDataSource.getRepository(Despesas)

    const despesaFind:Despesas | null = await despesaRepository.findOne(
        {
            where:{
                id: parseInt(despesaId)
            }
        }
    )
    if(!despesaFind){
        throw new AppError("Despesa não encontrada!")
    }
    const despesa = ReturnDespesaSchema.parse(despesaFind)
    return despesa
}