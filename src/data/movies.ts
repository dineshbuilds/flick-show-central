
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
    poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    poster: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    poster: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    trailer: "https://www.youtube.com/embed/nxi6rtBtBM0",
    prices: {
      standard: 11.99,
      premium: 17.99
    }
  }
];
