import React from "react";
import reactIcon from "../../assets/react-icon.png";
const Footer = () => {
  return (
    <footer className="w-full footer flex justify-center text-white">
      <div className="w-1/2 flex align-middle justify-evenly">
        <div className="flex flex-col items-center border-x-2 px-3">
          <p>

          PoweredBy
          </p>
          <img src={reactIcon} alt="React" />
        </div>
        <div className="flex flex-col items-center border-x-2 px-3">
          <p>Contato</p>
          <p>(11) 5555-5555</p>
        </div>
        <div className="flex flex-col items-center border-x-2 px-3">
         <p>
          Horários
         </p>
         <p>
        Terça - Domingo
         </p>
         <p>18h - 24h</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
