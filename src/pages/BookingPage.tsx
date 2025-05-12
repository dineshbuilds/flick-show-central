
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeatSelection from '../components/SeatSelection';
import { showtimes, theaters } from '../data/theaters';
import { movies } from '../data/movies';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  const showtime = showtimes.find(s => s.id === id);
  if (!showtime) return <div>Showtime not found</div>;
  
  const movie = movies.find(m => m.id === showtime.movieId);
  if (!movie) return <div>Movie not found</div>;
  
  const theater = theaters.find(t => t.id === showtime.theaterId);
  if (!theater) return <div>Theater not found</div>;
  
  const screen = theater.screens.find(s => s.id === showtime.screenId);
  if (!screen) return <div>Screen not found</div>;

  const ticketPrice = showtime.type === 'premium' ? movie.prices.premium : movie.prices.standard;
  const totalPrice = selectedSeats.length * ticketPrice;
  
  const handleSeatSelect = (seats: string[]) => {
    setSelectedSeats(seats);
  };
  
  const handleCheckout = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }
    
    // In a real app, we would save the booking and redirect to payment
    alert(`Booking confirmed!\n\nMovie: ${movie.title}\nTheater: ${theater.name}\nScreen: ${screen.name}\nDate: ${showtime.date}\nTime: ${showtime.startTime}\nSeats: ${selectedSeats.join(', ')}\nTotal: $${totalPrice.toFixed(2)}`);
    navigate('/');
  };
  
  return (
    <>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="text-cinema-muted hover:text-cinema-primary mr-4"
            >
              &larr; Back
            </button>
            <h1 className="text-2xl font-bold">Select Your Seats</h1>
          </div>
          
          <div className="bg-cinema-card rounded-lg p-6 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-6 pb-6 border-b border-cinema-dark">
              <div>
                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                <p className="text-cinema-muted">{movie.duration} min | {movie.genre.join(', ')}</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <p className="text-cinema-muted">{theater.name} - {screen.name}</p>
                <p className="text-cinema-light">{showtime.date} | {showtime.startTime}</p>
                <p className="text-cinema-primary">{showtime.type.toUpperCase()}</p>
              </div>
            </div>
            
            <SeatSelection 
              showtime={showtime} 
              rows={screen.rows} 
              seatsPerRow={screen.seatsPerRow} 
              onSeatSelect={handleSeatSelect}
            />
            
            <div className="mt-8 p-6 bg-cinema-dark rounded-lg">
              <h3 className="text-lg font-bold mb-4">Booking Summary</h3>
              
              <div className="flex justify-between mb-2">
                <span>Tickets ({selectedSeats.length} × ${ticketPrice.toFixed(2)})</span>
                <span>${(selectedSeats.length * ticketPrice).toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span>Booking Fee</span>
                <span>$1.50</span>
              </div>
              
              <div className="border-t border-cinema-muted/30 my-4 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>${(totalPrice + 1.5).toFixed(2)}</span>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={selectedSeats.length === 0}
                className={`w-full py-3 rounded-md text-white font-bold ${
                  selectedSeats.length > 0 
                    ? 'bg-cinema-primary hover:bg-cinema-secondary' 
                    : 'bg-cinema-muted cursor-not-allowed'
                } transition-colors`}
              >
                {selectedSeats.length > 0 ? 'Continue to Payment' : 'Select seats to continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BookingPage;
