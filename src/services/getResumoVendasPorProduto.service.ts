import { AppDataSource } from "../data-source";
import { Vendas } from "../entities/vendas.entitie";
import { returnResumoSchema, iResumo } from "../schemas/vendas.schemas";
import { AppError } from "../errors";

export const GetResumoPorProdutoService = async (produtoId: string): Promise<iResumo> => {
  const vendasRepository = AppDataSource.getRepository(Vendas);

  const resumoRaw = await vendasRepository
    .createQueryBuilder("venda")
    .leftJoin("venda.produto", "produto")
    .select("SUM(venda.quantidade)", "totalProdutosVendidos")
    .addSelect("SUM(venda.total_vendido)", "faturamentoTotal")
    .addSelect("SUM(venda.total_lucro)", "lucroTotal")
    .where("produto.id = :produtoId", { produtoId })
    .getRawOne();

  if (!resumoRaw || !resumoRaw.totalProdutosVendidos) {
    throw new AppError("Nenhuma venda encontrada para este produto", 404);
  }

  const resumo = {
    totalProdutosVendidos: Number(resumoRaw.totalProdutosVendidos),
    faturamentoTotal: Number((resumoRaw.faturamentoTotal / 100).toFixed(2)),
    lucroTotal: Number((resumoRaw.lucroTotal / 100).toFixed(2)),
  };

  return returnResumoSchema.parse(resumo);
};
