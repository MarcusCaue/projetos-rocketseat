import { FastifyInstance } from "fastify"
// Objeto que realiza a conexão com o BD e permite fazer qualquer manipulação
import { prisma } from "./lib/prisma" 
// Objeto que realiza a validações e as tipagens dos atributos
import { z } from "zod"
// Função para manipulação de datas
import dayjs from "dayjs"

// Lembrar que o Fastify só trabalha com funções assíncronas
export async function appRoutes(app : FastifyInstance) {
  // Criação de um novo hábito
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
  // Verificando informações de um dia específico
  app.get("/day", async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date() // convertendo dados
    })

    const { date } = getDayParams.parse(request.query)
    const parseDate = dayjs(date).startOf("day")
    const weekDay = parseDate.get("day")

    const habitsOfDay = await prisma.habit.findMany({
      where: { 
        created_at: {
          lte: date
        },
        weekDays : {
          some : {
            week_day : weekDay
          }
        }
      }
    })

    const day = await prisma.day.findFirst({
      where: {
        date: parseDate.toDate()
      },
      include : {
        dayHabits: true
      }

    })

    const completedHabits = day?.dayHabits.map(dayHabit => {
      return dayHabit.habit_id
    })

    return { habitsOfDay, completedHabits }
  })
  // Marcação e Desmarcação de um Hábito
  app.patch("/habits/:id/toggle", async (request) => {
    // ":{param}" => "route param" => parâmetro de identificação

    const toggleHabitParams = z.object({ id : z.string().uuid() })
    const { id } = toggleHabitParams.parse(request.params)
    const today = dayjs().startOf("day").toDate()

    let day = await prisma.day.findUnique({
      where: { date: today }
    })  
    if (!day) {
      day = await prisma.day.create({
        data: { date : today }
      })
    }

    // Verificando se o usuário já tinha marcado como concluído => registro existente
    const dayHabit = await prisma.dayHabit.findUnique({
      where : {
        day_id_habit_id: {
          day_id: day.id,
          habit_id: id
        }
      }
    })

    if (dayHabit) {
      // Desmarcar
      await prisma.dayHabit.delete({
        where : {
          id: dayHabit.id
        }
      })
    } else {
      // Marcar
      // Completando hábito
      await prisma.dayHabit.create({
        data : {
          day_id : day.id,
          habit_id : id
        }
      })
    }

    
  })
}