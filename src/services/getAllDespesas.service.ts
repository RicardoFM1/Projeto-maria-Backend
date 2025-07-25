import { Repository } from "typeorm"
import { Despesas } from "../entities/despesas.entitie"
import { AppDataSource } from "../data-source"
import { returnAllVendasSchema } from "../schemas/vendas.schemas"
import { ReturnAllDespesasSchemas } from "../schemas/despesas.schemas"
import { AppError } from "../errors"

export const GetAllDespesasService =async () => {
    const despesaRepository:Repository<Despesas> = AppDataSource.getRepository(Despesas)
    const despesasFind:Despesas[]|[] = await despesaRepository.find()

    if(despesasFind.length <= 0){
        throw new AppError("Nenhuma despesa cadastrada ainda")
    }
    const despesas = ReturnAllDespesasSchemas.parse(despesasFind)
    return despesas
}