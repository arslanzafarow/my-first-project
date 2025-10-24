import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

import "./styles/globals.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;





        
//vh-современный метод адаптации
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
