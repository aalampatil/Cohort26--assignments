// src/components/JokeCard.jsx

const JokeCard = ({ joke }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
      <p className="text-gray-800 text-md">{joke.content}</p>

      {joke.categories.length > 0 && (
        <div className="mt-3 flex gap-2 flex-wrap">
          {joke.categories.map((cat, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
              #{cat}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default JokeCard;
