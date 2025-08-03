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

  return (
    <div
      className="min-h-screen transition-all duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Header */}
      <Header />

      {/* Mobile Hamburger for Theme2 */}
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
        {/* Sidebar for Theme2 */}
        {isTheme2 && (
          <aside
            className={`${
              sidebarOpen ? "block" : "hidden"
            } sm:block w-full sm:w-64 bg-gray-900 text-white p-4 sm:min-h-screen`}
          >
            <h3 className="text-lg font-semibold mb-4">Sidebar Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline block">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline block">
                  About
                </Link>
              </li>
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
