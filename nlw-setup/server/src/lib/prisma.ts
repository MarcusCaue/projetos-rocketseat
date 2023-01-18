import { PrismaClient } from "@prisma/client";

// Use o { log: ["query"] } para ver informações das querys do prisma
export const prisma = new PrismaClient()