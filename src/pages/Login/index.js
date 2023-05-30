import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import login_logo from "../../assets/login-logo.png";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [inputValues, setInputValues] = useState({
    email: "",
    senha: "",
  });

  const handleOnChangeValue = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value, // [ ] -> para construir cmo sendo a chave
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    loginUser(inputValues);
  };

  return (
    <section className="w-full h-screen">
      <div className="flex flex-col py-9 items-center">
        <form
          onSubmit={handleOnSubmit}
          className="bg-slate-400 w-96 mt-6 p-4 rounded-lg shadow-lg"
        >
          <div className="w-full mb-8">
            <img
              src={login_logo}
              alt="Logo tipo app"
              className="w-36 mx-auto"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <input
              onChange={handleOnChangeValue}
              name="email"
              type="mail"
              placeholder="email"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
            />
            <input
              onChange={handleOnChangeValue}
              name="senha"
              type="password"
              placeholder="senha"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
            />
          </div>
          <button className="w-full py-3 bg-primary text-white focus: outline-none focus: ring-4 mt-6 rounded-lg transition duration-300">
            Entrar
          </button>
          <p className="text-base text-primary text-center my-6 hover: underline cursor-pointer">
            {" "}
            Precisa de uma conta?{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
