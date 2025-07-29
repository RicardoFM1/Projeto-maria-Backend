import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Vendas } from "../entities/vendas.entitie"
import { iReturnAllVendas, returnAllVendasSchema } from "../schemas/vendas.schemas"
import { AppError } from "../errors"



export const GetAllVendasService = async():Promise<iReturnAllVendas> => {
    const vendasRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas)
    const vendasFind = await vendasRepository.find(
        {
            relations:{
                produto: true
            }
        }
    )
    if(vendasFind.length <= 0){
        throw new AppError("Nenhuma venda cadastrada ainda")
    }
    const vendas = returnAllVendasSchema.parse(vendasFind)
    return vendas.map((venda) => ({
        ...venda,
        total_vendido: venda.total_vendido / 100,
        total_lucro: venda.total_lucro / 100
    }))
}