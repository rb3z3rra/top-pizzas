import React, { useEffect, useState } from "react";
import Product from "../Product";
import { findAllProducts } from "../../services/productServices";

const ProductList = () => {
  const [categoriaTab, setCategoriaTab] = useState("Pizzas");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await findAllProducts();
    setProducts(response.data);
  };

  return (
    <main className="my-12 max-w-screen-xl mx-auto px-3">
      {/* menu de categoria */}
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            categoriaTab === "Pizzas"
              ? "active-menu-tab bg-primary"
              : "menu-tab"
          }
          onClick={() => setCategoriaTab("Pizzas")}
        >
          Pizzas
        </p>
        <p
          className={
            categoriaTab === "Pizzas Doces"
              ? "active-menu-tab bg-primary"
              : "menu-tab"
          }
          onClick={() => setCategoriaTab("Pizzas Doces")}
        >
          Pizzas Doces
        </p>
        <p
          className={
            categoriaTab === "Bebidas"
              ? "active-menu-tab bg-primary"
              : "menu-tab"
          }
          onClick={() => setCategoriaTab("Bebidas")}
        >
          Bebidas
        </p>
      </div>
      {/* lista de produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
