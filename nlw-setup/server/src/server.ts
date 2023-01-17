// Minuto 28:54

// Importando a biblioteca que usaremos para criar uma API RestFul
import Fastify from "fastify"

// Objeto que representa a aplicação
const app = Fastify()

/** Métodos HTTP: 
 *  - Get: obtenção de dados,
 *  - Post: criação de dados,
 *  - Put: atualização de recursos,
 *  - Patch: atualização de informações específicas de recursos,
 *  - Delete: remoção de recursos
*/


// Seção de as rotas
app.get("/hello", () => {
  return "Olá mundo!! Vamos construir um app back-end usando TypeScript!"
})

// Criando a porta em que a aplicação vai rodar
// O .then mostra uma mensagem enquanto o server está rodando
app.listen({ port: 2102 }).then(() => { console.log("Server running on the port 2102! ") })