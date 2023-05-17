import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      setUserLogged(true);
    }

    setLoading(false); // Depois da verificação de userInfo loading muda para false
  }, []);

  const loginUser = async (inputValues) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });
    const data = await response.json();
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/");
    setUserLogged(true);
  };

  const logoutUser = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate("/login");
  };
  return { userLogged, loading, loginUser, logoutUser };
};

export default useAuth;
