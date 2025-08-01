import { Repository } from "typeorm";
import { iCreateDespesa, iReturnDespesa, ReturnDespesaSchema } from "../schemas/despesas.schemas";
import { Despesas } from "../entities/despesas.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const AtualizarDespesaService = async( despesaData:iCreateDespesa,despesaId:string):Promise<iReturnDespesa>  => {
    const despesaRepository:Repository<Despesas> = AppDataSource.getRepository(Despesas)

    const despesaFind:Despesas|null =await despesaRepository.findOne(
        {
            where:{
                id: parseInt(despesaId)
            }
        }
    )

    if(!despesaFind){
        throw new AppError("Não foi possível encontrar nenhuma despesa")
    }
    const despesaPatch = despesaRepository.merge(despesaFind, despesaData)
    await despesaRepository.save(despesaPatch)
    const despesa = ReturnDespesaSchema.parse(despesaPatch)
    return despesa
}