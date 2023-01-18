import { FastifyInstance } from "fastify"
// Objeto que realiza a conexão com o BD e permite fazer qualquer manipulação
import { prisma } from "./lib/prisma" 
// Objeto que realiza a validações e as tipagens dos atributos
import { z } from "zod"
// Função para manipulação de datas
import dayjs from "dayjs"

// Lembrar que o Fastify só trabalha com funções assíncronas
export async function appRoutes(app : FastifyInstance) {
  app.post("/habits", async (request) => {

    const validationRequestBodyToCreateHabit = z.object({
      title : z.string(),
      weekDays : z.array(
        z.number().min(0).max(6)
      )
    })

    // Pega informações enviadas via post, put ou patch com a validação feita pelo Zod
    const { title, weekDays } = validationRequestBodyToCreateHabit.parse(request.body)

    // Cria uma nova data zerando as horas, minutos e segundos
    const today = dayjs().startOf("day").toDate()

    // Criando um novo hábito
    await prisma.habit.create({
      data: {
        title: title,
        created_at: today,
        weekDays : {
          create : weekDays.map(weekDay => {
            return { week_day: weekDay }
          })
        }
      }
    })
  })
}