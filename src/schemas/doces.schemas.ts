import {z} from "zod"

export const CriarDoceSchema = z.object({
    name: z.string().min(1, "Precisa ser preenchido").toLowerCase(),
    preco_de_custo: z.number().min(1, "Precisa ser preenchido ou um número válido").positive("Precisa ser maior que 0"),
    preco_de_venda: z.number().min(1, "Precisa ser preenchido ou um número válido").positive("Precisa ser maior que 0")
}
)
export const ReturnDoceSchema = CriarDoceSchema.extend({
    id: z.number()
})
export const ReturnAllDocesSchema = ReturnDoceSchema.array()

export type iCriarDoce = z.infer<typeof CriarDoceSchema>
export type iReturnDoce = z.infer<typeof ReturnDoceSchema>
export type iReturnAllDoces = z.infer<typeof ReturnAllDocesSchema>