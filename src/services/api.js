import axios from "axios";

//criação do obj api para interação via métodos http com bknd
const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;
