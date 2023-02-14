import express from 'express'

import empleadosroute from './routes/empleados.route.js'

import documentroutes from './routes/documentos.route.js'

import indexroutes from './routes/index.routes.js'

import cors from 'cors'

console.log("Algo");

const app = express()

app.use(cors())

app.use(express.json())

app.use(indexroutes)

app.use(empleadosroute)

app.use(documentroutes)

export default app;