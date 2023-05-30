import React, { useContext } from "react";
import reactIcon from "../../assets/react-icon.png";
import { MyContext } from "../../context/MyContext";
const Footer = () => {
  const { greetings } = useContext(MyContext);
  return (
    <footer className="w-full footer text-white">
      <div className="w-full flex space-x-9 justify-center">
        <div className="flex flex-col items-center  px-3">
          <p>PoweredBy</p>
          <img src={reactIcon} alt="React" />
        </div>
        <div className="flex flex-col items-center  px-3">
          <p>Contato</p>
          <p>(11) 5555-5555</p>
        </div>
        <div className="flex flex-col items-center   px-3">
          <p>Horários</p>
          <p>Terça - Domingo</p>
          <p>18h - 24h</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center italic px-3 pt-6 text-sm text-white">
        "{greetings}"
      </div>
    </footer>
  );
};

export default Footer;
