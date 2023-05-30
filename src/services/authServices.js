// disponibiliza servicos de manipulação de user com api

import api from "./api";

// recebe login e senha pre-cadastrado para logar no sistema
const loginUserApi = (userValues) =>
  api // O api é o axios e os métodos
    .post("/auth/login", userValues) // url da rota de login, valor a ser enviado para rota
    .then((response) => response) // responsta da requisicao
    .catch((error) => console.log("Erro na chamada:", error)); // retorno caso de erro na requisição

// adiciona um novo usuário
const addUser = (userValues) => {
  api
    .post("/usuario/create", userValues)
    .then((response) => response)
    .catch((error) => console.log("Erro na chamada: ", error));
};

// busca informacoes do usuário por id informado
const getUserById = (idUser) =>
  api
    .get(`/usuario/find/${idUser}`) // para fazer interpolação é usado crases ``
    .then((response) => response)
    .catch((err) => console.log(err));

export { loginUserApi, addUser, getUserById };
