import {z} from "zod"
import { ReturnDoceSchema } from "./doces.schemas"

export const criarVendaSchema = z.object({
    quantidade:z.number(),
    produto: ReturnDoceSchema.pick({id:true}),
    // no front fzr um input que dê pra escolher qual produto pegar, e não
    // escrever ele em si, mas caso escrever, aparecer a sugestão e dai pegar o id pro banco
    // fazer a referencia, já que por nome não da.    
   
    
   

})
export const returnVendaSchema = z.object({
    
    produto: ReturnDoceSchema,
    quantidade:z.number(),
    total_vendido: z.number(),
    total_lucro: z.number(),
    hora_da_venda: z.string(),
    id:z.number()
})

export const returnAllVendasSchema = returnVendaSchema.array()

export const returnTotalVendasSchema = z.object({
    vendas:returnVendaSchema.array(),
    total:z.number(),
    total_qtd:z.number()
})

export type iReturnTotalVendas = z.infer<typeof returnTotalVendasSchema>
export type iReturnAllVendas = z.infer<typeof returnAllVendasSchema>
export type iReturnVenda = z.infer<typeof returnVendaSchema>
export type iCriarVenda = z.infer<typeof criarVendaSchema>