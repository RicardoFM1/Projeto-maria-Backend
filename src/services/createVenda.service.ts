
import { Repository } from "typeorm";
import { iCriarVenda, iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas";
import { Vendas } from "../entities/vendas.entitie";
import { AppDataSource } from "../data-source";

export const CreateVendaService = async(vendaData:iCriarVenda):Promise<iReturnVenda> => {
    const vendaRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas) // isso traz o DB

    const createVenda = vendaRepository.create(vendaData) // isso cria a venda indo no repositório(DB)
    await vendaRepository.save(createVenda) // isso aqui salva a criação
    const venda = returnVendaSchema.parse(createVenda) // isso só valida e retorna no json dps no controller
    return venda
}