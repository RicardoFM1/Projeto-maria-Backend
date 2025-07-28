import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Vendas } from "../entities/vendas.entitie"
import { iResumo, iReturnAllVendas, returnAllVendasSchema, returnResumoSchema } from "../schemas/vendas.schemas"
import { AppError } from "../errors"



export const GetSomatorioVendasService = async():Promise<iResumo> => {

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
     
    const resumoReduce = vendasFind.reduce(
    (acc, venda) => {
      const { quantidade, produto } = venda;
      const faturamento = produto.preco_de_venda * quantidade;
      const custo = produto.preco_de_custo * quantidade;
      const lucro = faturamento - custo;

      acc.totalProdutosVendidos += quantidade;
      acc.faturamentoTotal += faturamento;
      acc.lucroTotal += lucro;

      return acc;
    },
    {
      totalProdutosVendidos: 0,
      faturamentoTotal: 0,
      lucroTotal: 0,
    }
  );
        const resumo = returnResumoSchema.parse(resumoReduce)
    return resumo
}