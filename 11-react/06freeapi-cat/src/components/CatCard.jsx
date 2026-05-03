// src/components/CatCard.jsx

const CatCard = ({ cat }) => {
  return (
    <div className="bg-white rounded-xl shadow-md max-w-xl overflow-hidden">
      <img
        src={cat.image}
        alt={cat.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{cat.name}</h2>

        <p className="text-sm text-gray-600 mb-2">🌍 Origin: {cat.origin}</p>

        <p className="text-sm text-gray-600 mb-2">
          🧬 Life Span: {cat.life_span} years
        </p>

        <p className="text-sm text-gray-700 mb-3">{cat.description}</p>

        <div className="flex flex-wrap gap-2">
          {cat.temperament.split(", ").map((temp, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {temp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatCard;
