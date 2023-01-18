import { FastifyInstance } from "fastify"
// Objeto que realiza a conexão com o BD e permite fazer qualquer manipulação
import { prisma } from "./lib/prisma" 

// Lembrar que o Fastify só trabalha com funções assíncronas
export async function appRoutes(app : FastifyInstance) {
  app.get("/hello", async () => {
    const habits = await prisma.habit.findMany()
    return habits
  })
}