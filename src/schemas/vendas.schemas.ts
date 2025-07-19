import {z} from "zod"
import { ReturnDoces } from "./doces.schemas"
export const returnVendaSchema = z.object({
    id:z.number(),
    quantidade:z.number(),
    produto: ReturnDoces,
    total_vendido: z.number(),
    total_lucro: z.number(),
    hora_da_venda: z.string()

})
export const returnAllVendasSchema = z.object({
    vendas:returnVendaSchema.array(),
    total:z.number(),
    total_qtd:z.number()
})