// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="p-5 text-center">Loading products...</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6">🛍️ Product Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
