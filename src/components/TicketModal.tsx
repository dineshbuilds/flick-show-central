
import React, { useRef } from 'react';
import { Movie } from '../data/movies';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Download, X } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface TicketModalProps {
  movie: Movie;
  ticketDetails: any;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ movie, ticketDetails, onClose }) => {
  const ticketRef = useRef<HTMLDivElement>(null);

  const downloadTicket = async () => {
    if (!ticketRef.current) return;
    
    const canvas = await html2canvas(ticketRef.current, {
      scale: 2,
      backgroundColor: '#121212',
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 297]
    });
    
    const imgWidth = 210;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`${ticketDetails.movieTitle}-ticket-${ticketDetails.ticketId}.pdf`);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-cinema-card text-cinema-text border-cinema-primary max-w-md">
        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 text-cinema-text"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-bold text-center text-cinema-primary">Booking Successful!</h2>
          <p className="text-center text-cinema-text mt-1">Here's your movie ticket</p>
        </div>
        
        <div 
          ref={ticketRef}
          className="bg-cinema-dark border-2 border-cinema-primary rounded-lg overflow-hidden"
        >
          {/* Ticket header */}
          <div className="bg-cinema-primary text-white py-3 px-4">
            <h3 className="text-lg font-bold text-center">{movie.title}</h3>
          </div>
          
          {/* Ticket content */}
          <div className="p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-cinema-muted">Ticket #:</span>
              <span className="text-cinema-text">{ticketDetails.ticketId}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-cinema-muted">Name:</span>
              <span className="text-cinema-text">{ticketDetails.name}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-cinema-muted">Date:</span>
              <span className="text-cinema-text">{ticketDetails.date}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-cinema-muted">Number of Seats:</span>
              <span className="text-cinema-text">{ticketDetails.seats}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-cinema-muted">Total Price:</span>
              <span className="text-cinema-text">${ticketDetails.price.toFixed(2)}</span>
            </div>
            
            <div className="my-3 border-t border-dashed border-cinema-muted"></div>
            
            <div className="text-center">
              <p className="text-xs text-cinema-muted">Please arrive 15 minutes before the movie starts</p>
              <p className="text-xs text-cinema-muted mt-1">Seats remaining: {ticketDetails.remainingSeats}</p>
            </div>
          </div>
        </div>
        
        <Button
          onClick={downloadTicket}
          className="mt-4 w-full bg-cinema-accent hover:bg-cinema-accent/80 text-white flex items-center justify-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Ticket (PDF)
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default TicketModal;
