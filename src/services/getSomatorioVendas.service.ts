import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Vendas } from "../entities/vendas.entitie";
import {
  iResumo,
  iReturnAllVendas,
  returnAllVendasSchema,
  returnResumoSchema,
} from "../schemas/vendas.schemas";
import { AppError } from "../errors";

export const GetSomatorioVendasService = async (): Promise<iResumo> => {
  const vendasRepository: Repository<Vendas> =
    AppDataSource.getRepository(Vendas);
  const vendasFind = await vendasRepository.find({
    relations: {
      produto: true,
    },
  });
  if (vendasFind.length <= 0) {
    throw new AppError("Nenhuma venda cadastrada ainda");
  }

  const resumoReduce = vendasFind.reduce(
    (acc, venda) => {
      const { quantidade, produto } = venda;

    const precoVenda = produto.preco_de_venda;
    const precoCusto = produto.preco_de_custo;

      const faturamento = (precoVenda / 100) * quantidade;
      const custo = (precoCusto / 100) * quantidade;
      const lucro = Math.round((faturamento - custo) * 100) / 100;

      console.log(`Produto: ${produto.name}, Qtd: ${quantidade}, Venda: ${precoVenda}, Custo: ${precoCusto}, Fat: ${faturamento}, Lucro: ${lucro}`);
    acc.totalProdutosVendidos += venda.quantidade;
    acc.faturamentoTotal += venda.total_vendido / 100;
    acc.lucroTotal += venda.total_lucro / 100;
    return acc;
    },
    {
      totalProdutosVendidos: 0,
      faturamentoTotal: 0,
      lucroTotal: 0,
    }
  );
  const resumoArredondado = {
    totalProdutosVendidos: resumoReduce.totalProdutosVendidos,
    faturamentoTotal: Number(resumoReduce.faturamentoTotal.toFixed(2)),
    lucroTotal: Number(resumoReduce.lucroTotal.toFixed(2)),
  };
  const resumo = returnResumoSchema.parse(resumoArredondado);
  return resumo;
};
