import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-xl transition relative">
      {/* Кнопка избранного */}
      <button
        onClick={() => toggleFavorite(product)}
        className="absolute top-2 right-2 text-xl"
      >
        {isFavorite(product.id) ? "❤️" : "🤍"}
      </button>

      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700"
      >
        В корзину
      </button>
    </div>
  );
}

export default ProductCard;
