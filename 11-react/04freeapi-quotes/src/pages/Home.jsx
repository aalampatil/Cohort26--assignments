// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchQuotes } from "../api";
import QuoteCard from "../components/QuoteCard";

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadQuotes = async () => {
      const res = await fetchQuotes(page);
      setQuotes((prev) => [...prev, ...res]);
    };

    loadQuotes();
  }, [page]);

  if (!Array.isArray(quotes) || quotes.length === 0) {
    return <p className="p-5 text-center">Loading quotes...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-6 text-center">💬 Quotes Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
      <button
        className="border bg-green-50 m-2 p-2"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Load More
      </button>
    </div>
  );
};

export default Home;
