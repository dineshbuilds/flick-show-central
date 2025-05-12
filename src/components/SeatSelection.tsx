
import React, { useState } from 'react';
import { Showtime } from '../data/theaters';

interface SeatSelectionProps {
  showtime: Showtime;
  rows: number;
  seatsPerRow: number;
  onSeatSelect: (seats: string[]) => void;
}

const SeatSelection: React.FC<SeatSelectionProps> = ({ 
  showtime, 
  rows, 
  seatsPerRow, 
  onSeatSelect 
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const handleSeatClick = (seatId: string) => {
    if (showtime.reservedSeats.includes(seatId)) return;
    
    setSelectedSeats(prev => {
      const newSelected = prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId];
      
      onSeatSelect(newSelected);
      return newSelected;
    });
  };
  
  const renderSeats = () => {
    const seatRows = [];
    
    for (let i = 0; i < rows; i++) {
      const rowLetter = alphabet[i];
      const seats = [];
      
      for (let j = 1; j <= seatsPerRow; j++) {
        const seatId = `${rowLetter}${j}`;
        const isReserved = showtime.reservedSeats.includes(seatId);
        const isSelected = selectedSeats.includes(seatId);
        
        let seatClass = "seat";
        if (isReserved) seatClass += " reserved";
        else if (isSelected) seatClass += " selected";
        else seatClass += " available";
        
        seats.push(
          <div 
            key={seatId}
            className={seatClass}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatId}
          </div>
        );
      }
      
      seatRows.push(
        <div key={rowLetter} className="flex justify-center">
          {seats}
        </div>
      );
    }
    
    return seatRows;
  };
  
  return (
    <div className="my-8">
      <div className="screen"></div>
      <div className="mb-4 text-center text-sm text-cinema-muted">SCREEN</div>
      
      <div className="overflow-x-auto">
        <div className="inline-block">
          {renderSeats()}
        </div>
      </div>
      
      <div className="mt-8 flex justify-center gap-8">
        <div className="flex items-center">
          <div className="seat available w-4 h-4 m-0 mr-2"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center">
          <div className="seat selected w-4 h-4 m-0 mr-2"></div>
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="seat reserved w-4 h-4 m-0 mr-2"></div>
          <span className="text-sm">Reserved</span>
        </div>
      </div>
      
      {selectedSeats.length > 0 && (
        <div className="mt-4 text-center">
          <p className="text-cinema-light">Selected: {selectedSeats.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
