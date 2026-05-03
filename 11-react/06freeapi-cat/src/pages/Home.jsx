// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchCat } from "../api";
import CatCard from "../components/CatCard";

const Home = () => {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadCat = async () => {
    setLoading(true);
    const data = await fetchCat();
    setCat(data);
    setLoading(false);
  };

  useEffect(() => {
    loadCat();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">🐱 Random Cat Viewer</h1>

      {loading ? <p>Loading...</p> : cat && <CatCard cat={cat} />}

      <button
        onClick={loadCat}
        className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Show Another Cat
      </button>
    </div>
  );
};

export default Home;
