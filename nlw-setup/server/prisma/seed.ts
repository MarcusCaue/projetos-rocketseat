import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const firstHabitCreationDate = new Date('2023-05-02T00:00:00.000')

const secondHabitId = '00880d75-a933-4fef-94ab-e05744435297'
const secondHabitCreationDate = new Date('2023-05-03T00:00:00.000')

const thirdHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
const thirdHabitCreationDate = new Date('2023-05-04T00:00:00.000')

async function run() {
  // Reset Database
  await prisma.habit.deleteMany()
  await prisma.day.deleteMany()

  // Create Habits
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: 'Jogar Bola',
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: 'Rezar',
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: 'Estudar',
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    })
  ])

  // Create Days which habits were completed
  await Promise.all([
    
    // Habits (Complete/Available): 1/3
    prisma.day.create({
      data: {
        /** Monday - Segunda */
        date: new Date('2023-05-22T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          }
        }
      }
    }),
    
    // Habits (Complete/Available): 2/3
    prisma.day.create({
      data: {
        /** Monday - Segunda */
        date: new Date('2023-05-15T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: secondHabitId, },
            { habit_id: thirdHabitId }
          ] 
        }
      }
    }),

    // Habits (Complete/Available): 3/3
    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-05-08T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })