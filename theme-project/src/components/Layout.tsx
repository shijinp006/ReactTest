// src/components/Layout.tsx
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  const { colors, name } = currentTheme;

  const isTheme2 = name === "theme2";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => {
    if (window.innerWidth < 640) setSidebarOpen(false);
  };

  const menuItems = [
    { name: "Dashboard", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];

  return (
    <div
      className="min-h-screen transition-all duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Header */}
      <Header />

      {/* Mobile Hamburger Menu (Only for Theme2) */}
      {isTheme2 && (
        <div className="sm:hidden flex justify-start px-4 mt-30">
          <button
            onClick={toggleSidebar}
            className="text-white bg-gray-800 p-2 rounded focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      <div className={`flex ${isTheme2 ? "flex-row" : "flex-col"} mt-4 sm:mt-0`}>
        {/* Sidebar (Theme2 Only) */}
        {isTheme2 && (
          <aside
            className={`${
              sidebarOpen ? "block" : "hidden"
            } sm:block w-full sm:w-64 bg-gray-900 text-white p-4 sm:min-h-screen`}
          >
            <h3 className="text-lg font-semibold mb-4">Sidebar Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    onClick={closeSidebar}
                    className="hover:underline block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-grow w-full px-4 sm:px-8 py-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
