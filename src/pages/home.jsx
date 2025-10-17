import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarDrawer from "../components/SidebarDrawer";
import { getProducts } from "../services/api";
import { useFavorites } from "../context/FavoritesContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { favorites } = useFavorites();

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = ["all", "favorites", ...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке продуктов:", err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let tempProducts = products;

    if (selectedCategory === "favorites") {
      tempProducts = favorites;
    } else if (selectedCategory !== "all") {
      tempProducts = tempProducts.filter((p) => p.category === selectedCategory);
    }

    tempProducts = tempProducts.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(tempProducts);
  }, [searchTerm, selectedCategory, products, favorites]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <input
        type="text"
        placeholder="Поиск товара..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      {/* Сетка товаров */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-10">Товары не найдены 😕</p>
      )}
    </div>
  );
}

export default Home;
