
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinema-dark border-t border-cinema-primary/20 text-cinema-text">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-cinema-primary">Flick</span>
              <span>Central</span>
            </h3>
            <p className="text-cinema-muted mb-4">
              Your premier destination for booking movie tickets online.
              Experience the best movies with the best viewing experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/theaters" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  Theaters
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  Promotions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-cinema-muted hover:text-cinema-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-cinema-muted">
          <p>&copy; {new Date().getFullYear()} FlickCentral. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
