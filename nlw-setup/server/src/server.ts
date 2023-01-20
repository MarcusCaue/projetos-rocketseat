/** Métodos HTTP: 
 *  - Get: obtenção de dados,
 *  - Post: criação de dados,
 *  - Put: atualização de recursos,
 *  - Patch: atualização de informações específicas de recursos,
 *  - Delete: remoção de recursos
*/

// Importando a biblioteca que usaremos para criar uma API RestFul
// Aplicação 
import Fastify from "fastify" 
// Quais aplicações podem acessar o Back-End (por padrão, nenhum pode)
import cors from "@fastify/cors" 
// Importando a função que contém as rotas do App
import { appRoutes } from "./routes"

// Objeto que representa a aplicação
const app = Fastify()
// Utilização do CORS -> Como não tem nenhuma restrição, qualquer aplicação poderá usar o back-end
app.register(cors)
// Seção de as rotas
app.register(appRoutes)

// Criando a porta em que a aplicação vai rodar
// O .then mostra uma mensagem enquanto o server está rodando
app.listen({ 
  port: 2102,
  host: "0.0.0.0"
}).then(() => { 
  console.log("Server running on the port 2102!") 
})