import {z} from "zod"
import { ReturnDoceSchema } from "./doces.schemas"
import { DeepPartial } from "typeorm"
import { Vendas } from "../entities/vendas.entitie"



export const criarVendaSchema = z.object({
    produto: z.string().min(1, "Precisa ser preenchido").toLowerCase(),
    quantidade: z.coerce.number(({
      required_error: "Precisa ser preenchido",
      invalid_type_error: "Precisa ser um número válido"
    }))
  
});
        // no front fzr um input que dê pra escolher qual produto pegar, e não
    // escrever ele em si, mas caso escrever, aparecer a sugestão e dai pegar o id pro banco
    // fazer a referencia, já que por nome não da.    
   
    
   

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


    const newSale: DeepPartial<Vendas> = {
      total_vendido: 100,
      total_lucro: 20,
      produto: { id: 1 }, 
      quantidade: 5
    };

export type iReturnTotalVendas = z.infer<typeof returnTotalVendasSchema>
export type iReturnAllVendas = z.infer<typeof returnAllVendasSchema>
export type iReturnVenda = z.infer<typeof returnVendaSchema>
export type iCriarVenda = z.infer<typeof criarVendaSchema>