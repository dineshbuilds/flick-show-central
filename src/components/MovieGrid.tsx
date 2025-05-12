
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import BookingModal from './BookingModal';
import TicketModal from './TicketModal';
import { movies, Movie } from '../data/movies';
import { useToast } from '@/hooks/use-toast';

const MovieGrid: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [ticketDetails, setTicketDetails] = useState<any>(null);
  const { toast } = useToast();

  const handleBookingClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setBookingComplete(false);
  };

  const handleBookingSubmit = (details: any) => {
    // Store booking info in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('movieBookings') || '{}');
    const movieBookings = existingBookings[details.movieId] || { totalSeats: 50, bookedSeats: 0 };
    
    if (movieBookings.bookedSeats + details.seats > movieBookings.totalSeats) {
      toast({
        title: "Not enough seats",
        description: `Only ${movieBookings.totalSeats - movieBookings.bookedSeats} seats available`,
        variant: "destructive"
      });
      return false;
    }
    
    // Update bookings
    movieBookings.bookedSeats += details.seats;
    existingBookings[details.movieId] = movieBookings;
    localStorage.setItem('movieBookings', JSON.stringify(existingBookings));
    
    // Create ticket details
    setTicketDetails({
      ...details,
      ticketId: `TKT-${Math.floor(Math.random() * 10000)}`,
      date: new Date().toLocaleDateString(),
      remainingSeats: movieBookings.totalSeats - movieBookings.bookedSeats
    });
    
    setBookingComplete(true);
    return true;
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setBookingComplete(false);
    setTicketDetails(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-cinema-text">Now Playing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onBookingClick={handleBookingClick}
          />
        ))}
      </div>
      
      {/* Booking Modal */}
      {selectedMovie && !bookingComplete && (
        <BookingModal 
          movie={selectedMovie} 
          onSubmit={handleBookingSubmit}
          onClose={handleCloseModal}
        />
      )}
      
      {/* Ticket Modal */}
      {bookingComplete && ticketDetails && (
        <TicketModal
          movie={selectedMovie!}
          ticketDetails={ticketDetails}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MovieGrid;
