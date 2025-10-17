import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      if (prev.find((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id); // убираем из избранного
      } else {
        return [...prev, product]; // добавляем в избранное
      }
    });
  };

  const isFavorite = (id) => favorites.some((p) => p.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);