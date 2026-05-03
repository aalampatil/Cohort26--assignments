// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchJokes } from "../api";
import JokeCard from "../components/JokeCard";

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(1);

  const loadJokes = async () => {
    const res = await fetchJokes(page);

    // ✅ filter explicit jokes
    const cleanJokes = (res.data || []).filter(
      (joke) => !joke.categories.includes("explicit"),
    );

    setJokes((prev) => [...prev, ...cleanJokes]);
  };

  useEffect(() => {
    loadJokes();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-6 text-center">😂 Jokes Viewer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jokes.map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
