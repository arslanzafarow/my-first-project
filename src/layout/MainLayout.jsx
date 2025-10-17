import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Tabs />
      <main className="flex-grow p-6">
        <Outlet /> {/* <- сюда рендерятся страницы (Home, ProductPage и т.д.) */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
