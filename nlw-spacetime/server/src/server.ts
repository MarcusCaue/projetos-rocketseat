/**
 * Em suma, uma API RESTful é uma api que segue alguns padrões consolidados.
 */

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
const app = fastify()

// Servidor
app.listen({ port: 3333 }).then(() => {
  console.log('Server running on the port 3333')
})

/* Rotas */
app.register(memoriesRoutes)
