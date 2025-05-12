
import React from 'react';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cinema-background">
      <Navbar />
      <Hero />
      <div className="flex-grow">
        <MovieGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
