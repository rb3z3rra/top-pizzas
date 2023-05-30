import React, { useState } from "react";
import { addUser } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Register = () => {
  const navigate = useNavigate();

  // Estado dos inputs com valores iniciais vazios
  const [inputValues, setInputValues] = useState({
    nome: "",
    email: "",
    senha: "",
    imagem: "",
  });

  // quando houver mudança o valor do input é atualizado
  const handleOnChangeValue = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value, // [ ] -> para construir como sendo a chave
    });
  };

  // quando houver submit do form
  const handleOnSubmit = async (event) => {
    event.preventDefault(); // impede que a página seja atualizada
    addUser(inputValues); // chama função addUser passando valor atualizdo de inputValues
    navigate("/login"); // navega para a página de login
  };
  return (
    <main className="h-full mt-3">
      <div className="flex flex-col items-center m-auto">
        <RxAvatar className=" text-9xl text-[#006491]" />
        <h1 className="text-2xl text-gray-600">Cadastro de Usuário</h1>
        <form
          onSubmit={handleOnSubmit}
          className="bg-slate-400 w-96 mt-6 p-6 rounded-lg shadow-lg"
        >
          <div className="flex flex-col space-y-6">
            <input
              onChange={handleOnChangeValue}
              type="text"
              name="nome"
              placeholder="Digite seu nome:"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            />
            <input
              onChange={handleOnChangeValue}
              type="email"
              name="email"
              placeholder="Digite seu E-Mail:"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            />
            <input
              onChange={handleOnChangeValue}
              type="password"
              name="senha"
              placeholder="Digite sua senha:"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            />
            <input
              onChange={handleOnChangeValue}
              type="text"
              name="image"
              placeholder="Insira a url da imagem:"
              className="w-full px-4 py-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            />
            <button className="w-full py-3 bg-primary text-white focus: outline-none focus: ring-4 mt-6 rounded-lg transition duration-300">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
