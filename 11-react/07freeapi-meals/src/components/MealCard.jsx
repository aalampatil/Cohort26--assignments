// src/components/MealCard.jsx
import { getIngredients } from "../utils/helper";

const MealCard = ({ meal }) => {
  const ingredients = getIngredients(meal);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{meal.strMeal}</h2>

        <p className="text-sm text-gray-500 mb-2">
          {meal.strCategory} • {meal.strArea}
        </p>

        {/* Ingredients */}
        <ul className="text-xs text-gray-600 mb-2 max-h-24 overflow-auto">
          {ingredients.slice(0, 5).map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        {/* Instructions */}
        <p className="text-xs text-gray-700 line-clamp-3 mb-3">
          {meal.strInstructions}
        </p>

        {/* YouTube */}
        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            ▶ Watch Recipe
          </a>
        )}
      </div>
    </div>
  );
};

export default MealCard;
