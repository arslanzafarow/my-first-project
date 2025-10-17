import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-10">Загрузка...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default ProductPage;