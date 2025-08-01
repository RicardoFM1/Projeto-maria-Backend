import { AppDataSource } from "../data-source";
import { Doces } from "../entities/doces.entitie";
import { Vendas } from "../entities/vendas.entitie";
import { AppError } from "../errors";
import { iCriarVenda, iReturnVenda, returnVendaSchema } from "../schemas/vendas.schemas";

export const AtualizarVendaService = async (
  vendaData: iCriarVenda,
  vendaId: string
): Promise<iReturnVenda> => {
  const vendaRepository = AppDataSource.getRepository(Vendas);
  const doceRepository = AppDataSource.getRepository(Doces);

  const vendaFind = await vendaRepository.findOne({
    where: { id: parseInt(vendaId) },
    relations: { produto: true },
  });

  if (!vendaFind) {
    throw new AppError("Venda não encontrada");
  }

 
  const produtoFind = await doceRepository.findOne({
    where: { name: vendaData.produto.toLowerCase() },
  });

  if (!produtoFind) {
    throw new AppError(`Produto com nome '${vendaData.produto}' não encontrado`);
  }

  const vendaPatch = vendaRepository.merge(vendaFind, {
    ...vendaData,
    produto: produtoFind,
  });

  await vendaRepository.save(vendaPatch);

  const venda = returnVendaSchema.parse({
    ...vendaPatch,
    produto: produtoFind,
  });

  return venda;
};
