import { useState } from "react";
import { Link } from "react-router-dom";

function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Главная", path: "/" },
    { id: "products", label: "Продукты", path: "/" },
    { id: "cart", label: "Корзина", path: "/cart" },
    { id: "checkout", label: "Оформление", path: "/checkout" },
  ];

  return (
    <div className="bg-gray-100 border-b">
      <div className="max-w-6xl mx-auto flex space-x-4 p-2">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.path}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tabs;