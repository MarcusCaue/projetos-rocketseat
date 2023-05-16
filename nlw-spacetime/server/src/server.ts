/**
 * Em suma, uma API RESTful é uma api que segue alguns padrões consolidados.
 */

import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
// Cliente de manipulação do banco
const prisma = new PrismaClient()

// Servidor
app.listen({ port: 3333 }).then(() => {
  console.log('Server running on the port 3333')
})

/* Rotas */
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})
