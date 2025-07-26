import { deserialize, Repository } from "typeorm"
import { Despesas } from "../entities/despesas.entitie"
import { AppDataSource } from "../data-source"
import { CreateDespesaSchema, iCreateDespesa, iReturnDespesa, ReturnDespesaSchema } from "../schemas/despesas.schemas"
import app from "../app"
import { AppError } from "../errors"


export const CreateDespesaService = async(despesaData:iCreateDespesa):Promise<iReturnDespesa> => {
    const despesaRepository:Repository<Despesas> = AppDataSource.getRepository(Despesas)
    const findDespesa: Despesas | null = await despesaRepository.findOne(
        {
            where:{
                name: despesaData.name
            }
        }
    )
    if(findDespesa){
        throw new AppError("A despesa já existe", 409)
    }
    const createDespesa = despesaRepository.create(despesaData)
    await despesaRepository.save(createDespesa)
    const despesa = ReturnDespesaSchema.parse(createDespesa)
    return despesa
}