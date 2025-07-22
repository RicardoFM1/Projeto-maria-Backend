import z, { number } from "zod";


export const CreateDespesaSchema = z.object({
    name: z.string(),
    valor: z.number()
})

export const ReturnDespesaSchema = CreateDespesaSchema.extend({
    id: z.number()
})
export const ReturnAllDespesasSchemas = ReturnDespesaSchema.array() 

export type iCreateDespesa = z.infer<typeof CreateDespesaSchema>
export type iReturnDespesa = z.infer<typeof ReturnDespesaSchema>