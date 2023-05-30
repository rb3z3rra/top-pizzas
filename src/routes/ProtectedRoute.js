import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userLogged } = useContext(AuthContext);

  if (!userLogged) {
    // se usuário não logado retorna rota para login
    return <Navigate to="/" />;
  } else {
    // se não, executa rota filho presente em app.js
    return children;
  }
};

export default ProtectedRoute;
