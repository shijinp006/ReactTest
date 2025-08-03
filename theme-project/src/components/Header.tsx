import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export type ThemeName = 'theme1' | 'theme2' | 'theme3';

const Header: React.FC = () => {
  const { setTheme, currentTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeName);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 py-2">
        {/* Logo */}
        <div className="text-xl font-bold font-heading tracking-wide">
          Zee Cart
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:underline hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:underline hover:text-white transition">About</Link>
          <Link to="/contact" className="hover:underline hover:text-white transition">Contact</Link>
        </nav>

        {/* Theme Selector */}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <label htmlFor="theme-select" className="sr-only">Select Theme</label>
          <select
            id="theme-select"
            onChange={handleThemeChange}
            value={currentTheme.name}
            className="px-3 py-1 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
