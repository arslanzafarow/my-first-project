import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import MainLayout from "./layout/MainLayout";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Routes>
              {/* публичная страница логина */}
              <Route path="/login" element={<Login />} />

              {/* приватные маршруты, рендерятся внутри MainLayout через Outlet */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <MainLayout />
                  </PrivateRoute>
                }
              >
                <Route index element={<Home />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;








//Категория	Примеры классов	Описание

//Layout / Flex / Grid	flex, grid, items-center, justify-between, 
// gap-4	Flexbox, Grid, выравнивание элементов, промежутки между ними

//Display / Box	block, inline-block, inline, hidden, 
//container	Отображение элементов, размеры контейнеров

//Spacing	p-4, px-6, py-2, m-2, mx-auto, gap-6	
//Отступы (padding, margin) и промежутки (gap)

//Typography	text-xl, text-2xl, font-bold, font-medium,
// text-center, leading-6	Размер, жирность шрифта, интерлиньяж, выравнивание

//Colors	bg-blue-500, bg-red-200, text-white, text-gray-700,
//border-green-400	Цвета фона, текста, границ

//Borders / Dividers	border, border-2, rounded, rounded-lg, border-t, 
//border-gray-300	Рамки, скругления, линии-разделители

//Backgrounds / Gradients	bg-cover, bg-center, bg-gradient-to-r,
//from-blue-500, to-green-500	Фоновые изображения, градиенты, позиционирование

//Effects / Shadows / Opacity	shadow, shadow-lg, opacity-50,
//hover:bg-red-500, hover:shadow-xl	Тени, прозрачность, эффекты при наведении

//Transforms / Transitions / Animations	rotate-45, scale-110, 
//transition-all, duration-300, animate-bounce	Повороты, масштабирование, анимации, плавные переходы

//Sizing / Width / Height	w-1/2, w-full, h-64, max-w-screen-lg,
//min-h-screen	Ширина, высота, минимальные и максимальные размеры

//Position / Z-Index	absolute, relative, top-0, left-4,
//z-10	Позиционирование элементов и управление слоями

//Interactivity / Cursor / Pointer	cursor-pointer, select-none,
//pointer-events-none, hover:scale-105	Курсор мыши, взаимодействие с элементами, эффекты при наведении

//Filters / Blend Modes	filter, blur-sm, brightness-125,
//mix-blend-multiply	CSS-фильтры и режимы смешивания

//Accessibility / Screen Reader	sr-only, not-sr-only	
//Скрытие элементов визуально, но оставление для экранных читалок
