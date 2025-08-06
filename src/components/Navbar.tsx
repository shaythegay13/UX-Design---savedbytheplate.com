import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Urban Harvest NYC</span>
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 hover:bg-green-700 rounded-md">
              Home
            </Link>
            <Link to="/local-food-finder" className="px-3 py-2 hover:bg-green-700 rounded-md">
              Local Food
            </Link>
            <Link to="/education" className="px-3 py-2 hover:bg-green-700 rounded-md">
              Learn to Grow
            </Link>
            <Link to="/marketplace" className="px-3 py-2 hover:bg-green-700 rounded-md">
              Marketplace
            </Link>
            <Link to="/garden-planner" className="px-3 py-2 hover:bg-green-700 rounded-md">
              Garden Planner
            </Link>
            <Link to="/community" className="px-3 py-2 hover:bg-green-700 rounded-md">
              Community
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white hover:text-green-200 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-800">
            <Link to="/" className="block px-3 py-2 hover:bg-green-700 rounded-md" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/local-food-finder" className="block px-3 py-2 hover:bg-green-700 rounded-md" onClick={toggleMenu}>
              Local Food
            </Link>
            <Link to="/education" className="block px-3 py-2 hover:bg-green-700 rounded-md" onClick={toggleMenu}>
              Learn to Grow
            </Link>
            <Link to="/marketplace" className="block px-3 py-2 hover:bg-green-700 rounded-md" onClick={toggleMenu}>
              Marketplace
            </Link>
            <Link to="/garden-planner" className="block px-3 py-2 hover:bg-green-700 rounded-md" onClick={toggleMenu}>
              Garden Planner
            </Link>
            <Link to="/community" className="block px-3 py-2 hover:bg-green-700 rounded-md" onClick={toggleMenu}>
              Community
            </Link>
          </div>
        </div>}
    </nav>;
}