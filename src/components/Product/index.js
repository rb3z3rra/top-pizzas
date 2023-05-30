import React from "react";

const Product = ({ product }) => {
  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover: scale-105 p-4 rounded-lg relative">
      <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4">
        {product.nome}
      </span>
      <img
        className="w-36 mx-auto transform transition duration-300 hover: scale-105"
        src={product.imagem}
        alt="Imagem do hamburguer"
      />
      <div className="flex flex-cols items-end my-3 space-y-2"></div>
      <h1 className="text-gray-900 text-lg">{product.descricao}</h1>
      <p className="text-gray-500 text-sm text-center">{product.descricao}</p>
      <h2 className="text-gray-900 text-2xl font-bold">
        R$ {product.preco_unitario}
      </h2>
      <button className=" bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover: scale-105">
        Pedir Agora
      </button>
    </div>
  );
};

export default Product;
