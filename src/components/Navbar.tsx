
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-cinema-dark border-b border-cinema-primary/20 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-cinema-primary">Flick</span>
          <span className="text-xl font-bold text-cinema-text">Central</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-cinema-text hover:text-cinema-primary transition-colors">
            Movies
          </Link>
          <Link to="/theaters" className="text-cinema-text hover:text-cinema-primary transition-colors">
            Theaters
          </Link>
          <Link to="/promotions" className="text-cinema-text hover:text-cinema-primary transition-colors">
            Promotions
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="bg-cinema-primary text-white px-4 py-2 rounded-md hover:bg-cinema-secondary transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
