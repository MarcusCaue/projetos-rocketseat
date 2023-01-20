import axios from "axios"

// Representa um cliente HTTP
export const api = axios.create({
  // URL base que será usada para todas as chamadas
  baseURL: "http://localhost:2102",
})

