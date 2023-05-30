// disponibiliza informações para o contexto

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi, getUserById } from "../services/authServices";
import api from "../services/api";

const useAuth = () => {
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userFull, setUserFull] = useState({});

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userInfo.token}`; // pega o token do localStorage para autorização jtw
      findUserById(userInfo.userId);
      setUserLogged(true);
    }

    setLoading(false); // Depois da verificação de userInfo loading muda para false
  }, []);

  const loginUser = async (inputValues) => {
    const response = await loginUserApi(inputValues);
    const data = await response.data;
    localStorage.setItem("userInfo", JSON.stringify(data));
    //setar configurações padrão para instancia da api: Authoriation - Bearer - token
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
    navigate("/");
    setUserLogged(true);
  };

  const logoutUser = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate("/login");
  };

  const findUserById = async (userId) => {
    const response = await getUserById(userId);
    setUserFull(response.data);
  };

  return { userLogged, userFull, loading, loginUser, logoutUser };
};

export default useAuth;
