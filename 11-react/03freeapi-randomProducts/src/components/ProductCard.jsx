// src/components/ProductCard.jsx

const ProductCard = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(0);

  return (
    <div className="bg-white rounded-xl p-3 shadow hover:shadow-lg hover:scale-105 transition duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-44 object-cover rounded-lg"
      />

      <h2 className="font-semibold mt-3 text-sm line-clamp-2">
        {product.title}
      </h2>

      <p className="text-xs text-gray-500">{product.brand}</p>

      <div className="mt-2 flex items-center gap-2 flex-wrap">
        <span className="text-lg font-bold">${discountedPrice}</span>

        <span className="text-sm line-through text-gray-400">
          ${product.price}
        </span>

        <span className="text-green-600 text-xs">
          {product.discountPercentage}% off
        </span>
      </div>

      <p className="text-yellow-500 text-sm mt-1">⭐ {product.rating}</p>

      <p className="text-xs text-gray-500">
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <span className="inline-block mt-2 text-xs bg-gray-200 px-2 py-1 rounded">
        {product.category}
      </span>
    </div>
  );
};

export default ProductCard;
