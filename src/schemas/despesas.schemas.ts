import z, { number } from "zod";


export const CreateDespesaSchema = z.object({
    name: z.string().min(1, "Precisa ser preenchido"),
    valor: z.number().min(1, "Precisa ser preenchido")
})

export const ReturnDespesaSchema = CreateDespesaSchema.extend({
    id: z.number()
})

export const ReturnAllDespesasSchemas = ReturnDespesaSchema.array() 
export type iCreateDespesa = z.infer<typeof CreateDespesaSchema>
export type iReturnDespesa = z.infer<typeof ReturnDespesaSchema>