
import { Repository } from "typeorm";
import { iCriarVenda, iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas";
import { Vendas } from "../entities/vendas.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { Doces } from "../entities/doces.entitie";

export const CreateVendaService = async(vendaData:iCriarVenda):Promise<iReturnVenda> => {
    const vendaRepository:Repository<Vendas> = AppDataSource.getRepository(Vendas) // isso traz o DB
    const produtoRepository:Repository<Doces> = AppDataSource.getRepository(Doces)
    const produtoFind = await produtoRepository.findOne(
        {
           where:{
           id: vendaData.produto.id
           }
        }
    ) 
    if(!produtoFind){
        throw new AppError("Produto não encontrado!")
    }
    // fazer um find do produto, calcular os precos e retornar no parse, o create vir apenas com quantidade e produto
    const valorTotalProduto = produtoFind.preco_de_venda * vendaData.quantidade
    const valorLucro = valorTotalProduto - (produtoFind.preco_de_custo * vendaData.quantidade)
    const createVenda = vendaRepository.create({
        ...vendaData,
        total_lucro: valorLucro,
        total_vendido: valorTotalProduto
    }) // isso cria a venda indo no repositório(DB)
    await vendaRepository.save(createVenda) // isso aqui salva a criação
    const venda:iReturnVenda = returnVendaSchema.parse({...createVenda, produto:produtoFind}) // isso só valida e retorna no json dps no controller
    
    return venda
}
