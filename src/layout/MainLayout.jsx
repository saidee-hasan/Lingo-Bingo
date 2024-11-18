// src/Layout/MainLayout.js
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"> {/* This allows the main content to grow and fill available space */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;