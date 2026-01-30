import React from 'react';
import { Search, Bell, User, Sprout } from 'lucide-react';

const Header = ({ searchTerm, setSearchTerm }) => {
    const links = []

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <div className="bg-green-500 p-1.5 rounded-lg">
          <Sprout className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Plant Companion</h1>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for West African crops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-100 pl-10 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-green-600 transition-colors">Dashboard</a>
        <a href="#" className="text-green-600 border-b-2 border-green-500 pb-0.5">Explorer</a>
        <a href="#" className="hover:text-green-600 transition-colors">My Garden</a>
        <a href="#" className="hover:text-green-600 transition-colors">Community</a>
      </nav>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <User className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;