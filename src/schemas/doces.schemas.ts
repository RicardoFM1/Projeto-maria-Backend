import {z} from "zod"

export const CriarDoce = z.object({
    name: z.string(),
    preco_de_custo: z.number(),
    preco_de_venda: z.number()
}
)
export const ReturnDoce = CriarDoce.extend({
    id:z.number()
})
export const ReturnAllDoces = ReturnDoce.array()

export type iCriarDoce = z.infer<typeof CriarDoce>
export type iReturnDoce = z.infer<typeof ReturnDoce>
export type iReturnAllDoces = z.infer<typeof ReturnAllDoces>