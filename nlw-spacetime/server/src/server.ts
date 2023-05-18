/**
 * Em suma, uma API RESTful é uma api que segue alguns padrões consolidados.
 */

import fastify from 'fastify'
import cors from "@fastify/cors"
import { memoriesRoutes } from './routes/memories'
const app = fastify()

// Inserindo a política de CORS
app.register(cors, {
  origin: true
})

// Servidor
app.listen({ port: 3333 }).then(() => {
  console.log('Server running on the port 3333')
})

/* Rotas */
app.register(memoriesRoutes)
