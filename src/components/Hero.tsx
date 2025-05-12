
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-dark to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-background to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">The Matrix Resurrections</h1>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl">
          Return to a world of two realities: one, everyday life; the other, what lies behind it.
          Mr. Anderson will have to follow the white rabbit once more.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/movie/1" 
            className="bg-cinema-primary hover:bg-cinema-secondary text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Book Tickets
          </Link>
          <button 
            className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white/10 transition-colors"
          >
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
