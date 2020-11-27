import "reflect-metadata";
import * as express from 'express'
import * as bodyparser from 'body-parser'
import { createConnection } from 'typeorm'
import { routes } from "./routes";

const app = express()
createConnection()
.then(() => console.log("Conexão feita"))
.catch(err => console.log(`Falha na conexão ${err}`))

app.use(bodyparser.json())
app.use(routes)
app.listen(3333, () => console.log("Servidor rodando na porta 3333"))
