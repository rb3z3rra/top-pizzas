import React, { useState } from "react";
import { addPizza } from "../../services/productServices";
import { useNavigate } from "react-router-dom";

const AddPizza = () => {
  const navigate = useNavigate();
  const [productForm, setProductForm] = useState({
    nome: "",
    descricao: "",
    tamanho: "",
    preco_unitario: 0,
    imagem: "",
  });

  const handleOnChangeValue = (event) => {
    setProductForm({
      ...productForm,
      [event.target.name]: event.target.value, // [ ] -> para construir cmo sendo a chave
    });
    console.log(productForm);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const pizza = {
      ...productForm,
      preco_unitario: parseInt(productForm.preco_unitario),
    };

    const response = await addPizza(pizza);

    if (response) {
      alert("Cadastrado com sucesso!");
      navigate("/admin");
    }
  };

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl text-gray-600">Cadastro de Produtos</h1>
      </div>

      <form
        onSubmit={handleOnSubmit}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="nome" className="text-gray-500">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={handleOnChangeValue}
            className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
          />
          <label htmlFor="descricao" className="text-gray-500">
            Descrição
          </label>
          <textarea
            name="descricao"
            id="descricao"
            cols="30"
            rows="5"
            required
            onChange={handleOnChangeValue}
            className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
          ></textarea>
          <label htmlFor="tamanho" className="text-gray-500">
            Tamanho
          </label>
          <input
            type="text"
            id="tamanho"
            name="tamanho"
            required
            onChange={handleOnChangeValue}
            className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="preco" className="text-gray-500">
            Preço
          </label>
          <input
            type="text"
            id="preco"
            name="preco_unitario"
            required
            onChange={handleOnChangeValue}
            className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
          />
          <label htmlFor="imagem" className="text-gray-500">
            Imagem
          </label>
          <input
            type="text"
            id="imagem"
            name="imagem"
            required
            onChange={handleOnChangeValue}
            className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
          />

          <div className="mt-8">
            <button className="w-full py-3 bg-primary text-white focus: outline-none focus: ring-4 mt-6 rounded-lg transition duration-300">
              Adicionar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddPizza;
