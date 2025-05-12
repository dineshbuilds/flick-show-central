
export interface Movie {
  id: string;
  title: string;
  genre: string[];
  duration: number; // in minutes
  rating: number;
  releaseDate: string;
  director: string;
  cast: string[];
  synopsis: string;
  poster: string;
  trailer: string;
  prices: {
    standard: number;
    premium: number;
  };
}

export const movies: Movie[] = [
  
  {
    id: "4",
    title: "Interstellar (2014)",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    duration: 169,
    rating: 4.9,
    releaseDate: "2014-11-07",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: "https://play-lh.googleusercontent.com/mLDU4agwREtETjWAuaGrNicJrHTIB3vbDMkmWKqLqibKDWs9edpLXUbh5s9ks11FA4cy",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    prices: {
      standard: 12.99,
      premium: 18.99
    }
  },
  {
    id: "5",
    title: "Gravity",
    genre: ["Drama", "Sci-Fi", "Thriller"],
    duration: 91,
    rating: 4.6,
    releaseDate: "2013-10-04",
    director: "Alfonso Cuarón",
    cast: ["Sandra Bullock", "George Clooney", "Ed Harris"],
    synopsis: "Two astronauts work together to survive after an accident leaves them stranded in space.",
    poster: "https://images.justwatch.com/poster/241479855/s718/gravity.jpg",
    trailer: "https://www.youtube.com/embed/OiTiKOy59o4",
    prices: {
      standard: 10.99,
      premium: 16.99
    }
  },
  {
    id: "6",
    title: "Lucy",
    genre: ["Action", "Sci-Fi", "Thriller"],
    duration: 89,
    rating: 4.2,
    releaseDate: "2014-07-25",
    director: "Luc Besson",
    cast: ["Scarlett Johansson", "Morgan Freeman", "Choi Min-sik"],
    synopsis: "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10479310_p_v10_ar.jpg",
    trailer: "https://www.youtube.com/embed/6Vu081NOorA",
    prices: {
      standard: 10.99,
      premium: 16.99
    }
  },
  {
    id: "7",
    title: "Ad Astra",
    genre: ["Adventure", "Drama", "Mystery"],
    duration: 123,
    rating: 4.3,
    releaseDate: "2019-09-20",
    director: "James Gray",
    cast: ["Brad Pitt", "Tommy Lee Jones", "Ruth Negga"],
    synopsis: "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.",
    poster: "https://images.moviesanywhere.com/5c6ef53757853faadc2ca017e8c6da56/c2e95949-76d5-4f09-8ac7-740b18a7b6e5.jpg",
    trailer: "https://www.youtube.com/embed/nxi6rtBtBM0",
    prices: {
      standard: 11.99,
      premium: 17.99
    }
  }
];
