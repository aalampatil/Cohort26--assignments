// src/components/QuoteCard.jsx

const QuoteCard = ({ quote }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
      <p className="text-md italic mb-4 text-gray-700">“{quote.content}”</p>

      <h2 className="font-semibold text-gray-900">— {quote.author}</h2>

      {quote.tags?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {quote.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
