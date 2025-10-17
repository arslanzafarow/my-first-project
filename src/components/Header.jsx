import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        MyStore
      </Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Главная</Link>
        <Link to="/cart" className="hover:underline">
          Корзина ({cart.length})
        </Link>
      </nav>
    </header>
  );
}

export default Header;