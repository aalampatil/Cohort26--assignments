// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchMeals } from "../api";
import MealCard from "../components/MealCard";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [page, setPage] = useState(1);

  const loadMeals = async () => {
    const res = await fetchMeals(page);

    setMeals((prev) => [...prev, ...(res.data || [])]);
  };

  useEffect(() => {
    loadMeals();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-6">🍽️ Meals Recipes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
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
