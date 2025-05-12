
import React, { useState } from 'react';
import { Movie } from '../data/movies';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { X } from 'lucide-react';

interface BookingModalProps {
  movie: Movie;
  onClose: () => void;
  onSubmit: (details: any) => boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({ movie, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [seats, setSeats] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (phone.trim() && !/^\d{10}$/.test(phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (seats < 1) newErrors.seats = 'Seats must be at least 1';
    if (seats > 10) newErrors.seats = 'Maximum 10 seats allowed per booking';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      const bookingDetails = {
        name,
        phone,
        seats,
        movieId: movie.id,
        movieTitle: movie.title,
        price: movie.prices.standard * seats
      };
      
      const success = onSubmit(bookingDetails);
      if (!success) {
        setErrors({ seats: 'Not enough seats available' });
      }
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-cinema-card text-cinema-text border-cinema-primary">
        <DialogHeader>
          <DialogTitle className="text-cinema-text text-xl flex items-center justify-between">
            <span>Book Tickets - {movie.title}</span>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-cinema-text"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-cinema-dark/50 text-cinema-text border-cinema-primary/50"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-cinema-dark/50 text-cinema-text border-cinema-primary/50"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="seats">Number of Seats</Label>
            <div className="flex items-center">
              <Button
                type="button"
                variant="outline"
                className="bg-cinema-dark/50 text-cinema-text"
                onClick={() => setSeats(prev => Math.max(1, prev - 1))}
              >
                -
              </Button>
              <Input
                id="seats"
                type="number"
                min="1"
                max="10"
                value={seats}
                onChange={(e) => setSeats(parseInt(e.target.value) || 1)}
                className="mx-2 bg-cinema-dark/50 text-cinema-text border-cinema-primary/50 text-center"
              />
              <Button
                type="button"
                variant="outline"
                className="bg-cinema-dark/50 text-cinema-text"
                onClick={() => setSeats(prev => Math.min(10, prev + 1))}
              >
                +
              </Button>
            </div>
            {errors.seats && <p className="text-red-500 text-sm">{errors.seats}</p>}
          </div>
          
          <div className="pt-4">
            <p className="mb-4">Total Price: ${(movie.prices.standard * seats).toFixed(2)}</p>
            <Button
              type="submit"
              className="w-full bg-cinema-primary hover:bg-cinema-accent text-white"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
