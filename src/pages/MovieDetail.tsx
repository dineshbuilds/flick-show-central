
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { movies } from '../data/movies';
import { showtimes, theaters } from '../data/theaters';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  if (!movie) {
    return <div>Movie not found</div>;
  }

  const movieShowtimes = showtimes.filter(
    s => s.movieId === movie.id && s.date === selectedDate
  );
  
  // Group showtimes by theater
  const showtimesByTheater = movieShowtimes.reduce((acc, showtime) => {
    const theater = theaters.find(t => t.theaterId === showtime.theaterId);
    if (!theater) return acc;
    
    if (!acc[showtime.theaterId]) {
      acc[showtime.theaterId] = {
        theater: theater,
        showtimes: []
      };
    }
    
    acc[showtime.theaterId].showtimes.push(showtime);
    return acc;
  }, {} as Record<string, {theater: any, showtimes: typeof showtimes}>);
  
  const handleShowtimeSelect = (showtimeId: string) => {
    navigate(`/booking/${showtimeId}`);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };
  
  return (
    <>
      <Navbar />
      
      <div 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${movie.poster})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-background via-transparent to-cinema-background/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-2/3 lg:w-3/4">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-cinema-primary text-white px-3 py-1 rounded-full">
                {movie.rating}/5
              </span>
              
              <span className="text-cinema-muted">
                {movie.duration} min
              </span>
              
              <span className="text-cinema-muted">
                {formatDate(movie.releaseDate)}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genre.map((g, idx) => (
                <span 
                  key={idx} 
                  className="bg-cinema-dark text-cinema-light px-3 py-1 rounded-full text-sm"
                >
                  {g}
                </span>
              ))}
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p className="text-cinema-muted">{movie.synopsis}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Cast & Crew</h2>
              <p><span className="font-medium">Director:</span> {movie.director}</p>
              <p>
                <span className="font-medium">Cast:</span> {movie.cast.join(', ')}
              </p>
            </div>
            
            <button 
              onClick={() => setShowTrailer(true)}
              className="bg-cinema-primary text-white py-2 px-6 rounded-md hover:bg-cinema-secondary transition-colors mb-8"
            >
              Watch Trailer
            </button>
            
            {/* Booking Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Book Tickets</h2>
              
              {/* Date Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Date</h3>
                <div className="flex overflow-x-auto space-x-2 pb-4">
                  {[0, 1, 2, 3, 4, 5, 6].map(dayOffset => {
                    const date = new Date();
                    date.setDate(date.getDate() + dayOffset);
                    const formattedDate = date.toISOString().split('T')[0];
                    const displayDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                    
                    return (
                      <button
                        key={formattedDate}
                        onClick={() => setSelectedDate(formattedDate)}
                        className={`flex-shrink-0 px-4 py-2 rounded-md ${
                          selectedDate === formattedDate 
                            ? 'bg-cinema-primary text-white' 
                            : 'bg-cinema-dark text-cinema-muted hover:bg-cinema-dark/80'
                        }`}
                      >
                        {displayDate}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Theaters & Showtimes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Showtimes</h3>
                
                {Object.values(showtimesByTheater).length > 0 ? (
                  Object.values(showtimesByTheater).map(({ theater, showtimes }) => (
                    <div key={theater.id} className="mb-6">
                      <h4 className="font-medium mb-2">{theater.name}</h4>
                      <p className="text-sm text-cinema-muted mb-3">{theater.location}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {showtimes.map(showtime => (
                          <button
                            key={showtime.id}
                            onClick={() => handleShowtimeSelect(showtime.id)}
                            className={`px-4 py-2 rounded-md border ${
                              showtime.type === 'premium'
                                ? 'border-cinema-primary bg-cinema-primary/10 text-cinema-primary'
                                : 'border-cinema-light bg-cinema-dark text-cinema-light'
                            } hover:bg-opacity-80 transition-colors`}
                          >
                            {showtime.startTime}
                            {showtime.type === 'premium' && (
                              <span className="ml-1 text-xs">PREMIUM</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-cinema-muted">No showtimes available for the selected date.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trailer Modal */}
      {showTrailer && (
        <div className="trailer-overlay" onClick={() => setShowTrailer(false)}>
          <div 
            className="relative w-full max-w-4xl h-[60vh]"
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={`${movie.trailer}?autoplay=1`}
              title={`${movie.title} Trailer`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
              onClick={() => setShowTrailer(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default MovieDetail;
