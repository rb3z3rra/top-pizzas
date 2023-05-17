import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BsFillCartFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

const NavBar = () => {
  const { userLogged, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleOnClickLogin = () => {
    navigate("/login");
  };

  const handleOnClickCardapio = () => {
    navigate("/cardapio");
  };

  const handleOnClickContato = () => {
    navigate("/contato");
  };

  return (
    <header className="bg-transparent z-50 w-full navBar">
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-1 h-auto">
        <div className="flex flex-grow items-center cursor-pointer" onClick={()=>{navigate('/')}}>
          <img
            src={logo}
            alt="Logo"
            className="w-24 cursor-po
            "
          />

          <h1 className="text-center text-xl font-semibold text-white">
            Top-Pizzas
          </h1>
        </div>
        {userLogged ? (
          <div className="flex items-center justify-center space-x-4 text-white">
            <p>Bem vindo !</p>
            <button onClick={handleOnClickCardapio}>Cardápio</button>
            <button onClick={handleOnClickContato}>Contato</button>
            <div className="relative flex cursor-pointer">
              <span className="bg-primary w-4 h-4 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2">
                2
              </span>
              <BsFillCartFill className="w-6 h-6 cursor-pointer" />
            </div>
            <MdLogout className="w-6 h-6 cursor-pointer" onClick={logoutUser} />
          </div>
        ) : (
          <div className="flex items-center justify-end space-x-6 text-white text-xl">
            <button onClick={handleOnClickLogin}>Login</button>
            <button className="bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105">
              Register
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
