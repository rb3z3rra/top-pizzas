import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteProduct, findAllProducts } from "../../services/productServices";
const Admin = () => {
  const [pizzas, setProducts] = useState([]);
  const navigate = useNavigate();

  //Para que a função seja executada uma única vez no ciclo de vida da renderização do componente
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await findAllProducts();
    setProducts(response.data);
  };

  const removeProduct = async (id) => {
    const answer = window.confirm("Deseja excluir o produto?");

    if (answer) {
      await deleteProduct(id);
      getAllProducts();
    }
  };

  return (
    <main className="max-w-screen-xl mx-auto h-full">
      <div className="flex justify-end space-y-2">
        <button
          onClick={() => navigate("/admin/add-pizza")}
          className="w-44 px-2 py-3 bg-primary text-white ring-red-400 focus:outline-none focus: ring-4 mt-6 rounded-lg transition duration-300 poppins"
        >
          Adicionar Pizza
        </button>
      </div>
      <div className="flex flex-col my-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg shadow-md">
              <table className="min-w-full">
                <thead className="bg-primary">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 uppercase tracking-wider text-center"
                    >
                      Imagem
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 uppercase tracking-wider text-center"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 uppercase tracking-wider text-center"
                    >
                      Preço
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 uppercase tracking-wider text-center"
                    >
                      Tamanho
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="text-xs font-medium text-white px-6 py-3 uppercase tracking-wider text-center">
                        Ações
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pizzas.map((pizza) => (
                    // para usar map é necessáio informar key na prop
                    <tr key={pizza._id} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <img
                          src={pizza.imagem}
                          alt={pizza.nome}
                          className="w-16"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        {pizza.nome}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        {pizza.preco_unitario}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        {pizza.tamanho}
                      </td>

                      <td className=" px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                        <div className="flex items-center justify-center space-x-3">
                          <Link to={`/admin/edit-pizza/${pizza._id}`}>
                            <FaEdit className="cursor-pointer text-2xl text-blue-600" />
                          </Link>
                          <MdDelete
                            onClick={() => removeProduct(pizza._id)}
                            className="cursor-pointer text-2xl text-red-600"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
