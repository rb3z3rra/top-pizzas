import React from "react";
import { useNavigate } from "react-router-dom";

const Contato = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="h-auto align-middle">
      <fieldset className="flex flex-col py-9 items-center">
        <form
          onSubmit={handleOnSubmit}
          className="bg-slate-400 w-96 mt-6 p-4 rounded-lg shadow-lg"
        >
          <div>
            <label htmlFor="" className="flex flex-col space-y-6 py-1">
              Nome:
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="" className="flex flex-col space-y-6 py-1">
              Email:
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="" className="flex flex-col space-y-6 py-1">
              Telefone:
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
            />
            <label htmlFor="" className="flex flex-col space-y-6 py-1">
              Mensagem:
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-primary text-white focus: outline-none focus: ring-4 mt-6 rounded-lg transition duration-300">
            Enviar
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Contato;
