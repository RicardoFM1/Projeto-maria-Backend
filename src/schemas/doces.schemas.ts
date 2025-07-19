import {z} from "zod"

export const CriarDoce = z.object({
    name: z.string(),
    preco_de_custo: z.number(),
    preco_de_venda: z.number()
}
)
export const ReturnDoces = CriarDoce.extend({
    id:z.number()
})

export type iCriarDoce = z.infer<typeof CriarDoce>
export type iReturnDoce = z.infer<typeof ReturnDoces>