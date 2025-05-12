
import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../data/movies';
import { Button } from './ui/button';
import { Ticket } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onBookingClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onBookingClick }) => {
  return (
    <div className="movie-card group">
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-80 object-cover"
      />
      <div className="movie-card-overlay group-hover:opacity-100">
        <h3 className="text-lg font-bold text-white">{movie.title}</h3>
        <div className="flex items-center mt-1 text-sm">
          <span className="bg-cinema-primary text-white px-2 py-0.5 rounded-md">
            {movie.rating}/5
          </span>
          <span className="ml-2 text-white">{movie.duration} min</span>
        </div>
        <div className="flex flex-wrap mt-2 gap-1 mb-3">
          {movie.genre.map((g, idx) => (
            <span 
              key={idx}
              className="bg-cinema-dark/60 text-white text-xs px-2 py-0.5 rounded-md"
            >
              {g}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          <Link to={`/movie/${movie.id}`} className="flex-1">
            <Button variant="outline" className="w-full bg-cinema-dark/80 text-white border-cinema-primary hover:bg-cinema-primary hover:text-white">
              Details
            </Button>
          </Link>
          <Button 
            onClick={(e) => {
              e.preventDefault();
              onBookingClick(movie);
            }}
            className="flex-1 bg-cinema-primary hover:bg-cinema-accent text-white"
          >
            <Ticket className="mr-1 h-4 w-4" /> Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
