import { AppDataSource } from "../data-source";
import { Doces } from "../entities/doces.entitie";
import { Vendas } from "../entities/vendas.entitie";
import { AppError } from "../errors";
import { iCriarVenda, iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas";

export const CreateVendaService = async (vendaData: iCriarVenda): Promise<iReturnVenda> => {
  const vendaRepository = AppDataSource.getRepository(Vendas);
  const produtoRepository = AppDataSource.getRepository(Doces);

  const produtoFind = await produtoRepository.findOne({
    where: { name: vendaData.produto },
  });

  if (!produtoFind) {
    throw new AppError("Produto não encontrado!");
  }

  const valorTotalProduto = produtoFind.preco_de_venda * vendaData.quantidade;
  const valorLucro = valorTotalProduto - produtoFind.preco_de_custo * vendaData.quantidade;

  const createVenda = vendaRepository.create({
    quantidade: vendaData.quantidade,    
    total_lucro: valorLucro,
    total_vendido: valorTotalProduto,
    produto: { id: produtoFind.id },
  });

  await vendaRepository.save(createVenda);

  const venda = returnVendaSchema.parse({ ...createVenda, produto: produtoFind });

  return venda;
};
