
import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-full object-cover"
      />
      <div className="movie-card-overlay">
        <h3 className="text-lg font-bold text-white">{movie.title}</h3>
        <div className="flex items-center mt-1 text-sm">
          <span className="bg-cinema-primary text-white px-2 py-0.5 rounded-md">
            {movie.rating}/5
          </span>
          <span className="ml-2 text-white">{movie.duration} min</span>
        </div>
        <div className="flex flex-wrap mt-2 gap-1">
          {movie.genre.map((g, idx) => (
            <span 
              key={idx}
              className="bg-cinema-dark/60 text-white text-xs px-2 py-0.5 rounded-md"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
