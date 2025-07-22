import { Repository } from "typeorm"
import { Despesas } from "../entities/despesas.entitie"
import { AppDataSource } from "../data-source"
import { returnAllVendasSchema } from "../schemas/vendas.schemas"
import { ReturnAllDespesasSchemas } from "../schemas/despesas.schemas"

export const GetAllDespesasService =async () => {
    const despesaRepository:Repository<Despesas> = AppDataSource.getRepository(Despesas)
    const despesasFind:Despesas[]|[] = await despesaRepository.find()
    const despesas = ReturnAllDespesasSchemas.parse(despesasFind)
    return despesas
}