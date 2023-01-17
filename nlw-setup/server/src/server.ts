/** Métodos HTTP: 
 *  - Get: obtenção de dados,
 *  - Post: criação de dados,
 *  - Put: atualização de recursos,
 *  - Patch: atualização de informações específicas de recursos,
 *  - Delete: remoção de recursos
*/

// Importando a biblioteca que usaremos para criar uma API RestFul
import Fastify from "fastify" // Aplicação 
import { PrismaClient } from "@prisma/client" // Banco de Dados
import cors from "@fastify/cors" // Quais aplicações podem acessar o Back-End (por padrão, nenhum pode)

// Objeto que representa a aplicação
const app = Fastify()
// Utilização do CORS -> Como não tem nenhuma restrição, qualquer aplicação poderá usar o back-end
app.register(cors)
// Objeto que realiza a conexão com o BD e permite fazer qualquer manipulação
const db = new PrismaClient()

// Seção de as rotas
app.get("/hello", async () => {
  const habits = await db.habit.findMany()
  return habits
})

// Criando a porta em que a aplicação vai rodar
// O .then mostra uma mensagem enquanto o server está rodando
app.listen({ port: 2102 }).then(() => { console.log("Server running on the port 2102! ") })