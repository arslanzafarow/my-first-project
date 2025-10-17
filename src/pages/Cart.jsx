import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <p>Корзина пуста 😕</p>
        <Link to="/" className="text-blue-600 underline">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Ваша корзина</h2>
      {cart.map((p) => (
        <div key={p.id} className="flex justify-between items-center border-b py-3">
          <div className="flex items-center gap-3">
            <img src={p.image} alt={p.title} className="w-16 h-16 object-contain" />
            <p>{p.title}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-semibold">${p.price}</p>
            <button
              onClick={() => removeFromCart(p.id)}
              className="text-red-600 hover:underline"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
      <div className="text-right mt-4">
        <p className="text-lg font-bold mb-2">Итого: ${total.toFixed(2)}</p>
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Оформить заказ
        </Link>
        <button
          onClick={clearCart}
          className="ml-3 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
}

export default Cart;