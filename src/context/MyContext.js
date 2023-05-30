import { React, useState, createContext } from "react";
import { frases } from "../assets/frases";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [greetings] = useState(frases());

  return (
    <MyContext.Provider value={{ greetings }}>{children}</MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
