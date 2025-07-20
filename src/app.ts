import 'express-async-errors'
import express, { Application } from "express"

import { handleErrors } from "./errors"

import cors from "cors"
import { loginRoutes } from './routes/login.routes'
import { usuariosRoutes } from './routes/usuarios.routes'
import { docesRoutes } from './routes/doces.routes'
import { vendasRoutes } from './routes/vendas.routes'

const app:Application = express()

app.use(cors())
app.use(express.json())
app.use("/login", loginRoutes )
app.use("/usuarios", usuariosRoutes)
app.use("/doces", docesRoutes)
app.use("/vendas", vendasRoutes)

app.use(handleErrors)
export default app