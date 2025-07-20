import {z} from "zod"

export const CriarDoceSchema = z.object({
    name: z.string(),
    preco_de_custo: z.number(),
    preco_de_venda: z.number()
}
)
export const ReturnDoceSchema = CriarDoceSchema.extend({
    id: z.number()
})
export const ReturnAllDocesSchema = ReturnDoceSchema.array()

export type iCriarDoce = z.infer<typeof CriarDoceSchema>
export type iReturnDoce = z.infer<typeof ReturnDoceSchema>
export type iReturnAllDoces = z.infer<typeof ReturnAllDocesSchema>