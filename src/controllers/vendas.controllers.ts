import { Request, Response } from "express";
import { iCriarVenda, iReturnVenda } from "../schemas/vendas.schemas";
import { CreateVendaService } from "../services/createVenda.service";
import { GetAllVendasService } from "../services/getAllVendas.service";
import { deleteVendasService } from "../services/deleteVendas.service";
import { AtualizarVendaService } from "../services/atualizarVenda.service";
import { GetVendaByIdService } from "../services/getVendaById.service";
import { GetProdutoVendaByIdService } from "../services/getProdutoVendaById.service";
import { GetSomatorioVendasService } from "../services/getSomatorioVendas.service";

export const CreateVendaController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const vendaData: iCriarVenda = req.body;
  const venda: iReturnVenda = await CreateVendaService(vendaData);
  return res.status(200).json(venda);
};

export const GetAllVendasController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const venda = await GetAllVendasService();

  return res.status(200).json(venda);
};
export const getResumoVendasController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const resumo = await GetSomatorioVendasService();

  return res.status(200).json(resumo);
};
export const GetVendaByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const vendaId = req.params.id;
  const venda = await GetVendaByIdService(vendaId);

  return res.status(200).json(venda);
};
export const GetProdutoVendaByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const produtoVendaId = req.params.id;
  const produtoVenda = await GetProdutoVendaByIdService(produtoVendaId);

  return res.status(200).json(produtoVenda);
};
export const DeleteVendasController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const vendasId: string = req.params.id;
  await deleteVendasService(vendasId);

  return res.status(200).json("Venda deletada com sucesso");
};
export const AtualizarVendaController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const vendaData = req.body;
  const vendaId = req.params.id;

  const venda: iReturnVenda = await AtualizarVendaService(vendaData, vendaId);
  return res.status(200).json(venda);
};
