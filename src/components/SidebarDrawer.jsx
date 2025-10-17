import { useState } from "react";

function SidebarDrawer({ categories, selectedCategory, setSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Кнопка меню слева */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Меню
      </button>

      {/* Темный фон */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Сайдбар */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <div className="p-4 flex flex-col gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Закрыть
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setIsOpen(false); // закрываем меню после выбора
              }}
              className={`text-left px-3 py-2 rounded transition w-full ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SidebarDrawer;
