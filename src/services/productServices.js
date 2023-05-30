// servicos de interação com bknd via api e metodos http
import api from "./api";

// Envia uma requisição ao bkend para listar os produtos
const findAllProducts = () =>
  api
    .get("/pizza/findAll")
    .then((response) => response)
    .catch((err) => console.log(err));

const findPizzaById = (idPizza) =>
  api
    .get(`/pizza/find/${idPizza}`)
    .then((response) => response)
    .catch((err) => console.log(err));

const updatePizzaById = (id, pizzaEditada) =>
  api
    .put(`/pizza/update/${id}`, pizzaEditada)
    .then((response) => response)
    .catch((err) => err);

// Faz uma requisição ao bkend para adicionar um produto
const addPizza = (pizza) =>
  api
    .post("/pizza/create", pizza) // é informado o endPoint do método e o dado
    .then((response) => response)
    .catch((err) => console.log(err));

const deleteProduct = (id) =>
  api
    .delete(`/pizza/deletePizza/${id}`)
    .then((response) => response)
    .catch((err) => err);

export {
  findAllProducts,
  deleteProduct,
  addPizza,
  findPizzaById,
  updatePizzaById,
};
