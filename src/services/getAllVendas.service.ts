import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Vendas } from "../entities/vendas.entitie"
import { iReturnAllVendas, returnAllVendasSchema } from "../schemas/vendas.schemas"



export const GetAllVendasService = async():Promise<iReturnAllVendas> => {
    const vendasRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas)
    const vendasFind = await vendasRepository.find(
        {
            relations:{
                produto: true
            }
        }
    )
    const vendas = returnAllVendasSchema.parse(vendasFind)
    return vendas
}