import { DeepPartial } from "typeorm"
import {z} from "zod"

export const createUserSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string()
})

export const returnUserSchema = createUserSchema.extend({
    id: z.number()
}).omit({password:true})

export const returnAllUsersSchema = returnUserSchema.array()
export const updateUserSchema = createUserSchema.partial()


export type CreateUser = z.infer<typeof createUserSchema>
export type ReturnUser = z.infer<typeof returnUserSchema>
export type ReturnUsers = z.infer<typeof returnAllUsersSchema>
export type UpdateUser = DeepPartial<CreateUser>