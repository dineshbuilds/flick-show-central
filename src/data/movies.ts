
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
    id: "1",
    title: "The Matrix Resurrections",
    genre: ["Action", "Sci-Fi"],
    duration: 148,
    rating: 4.5,
    releaseDate: "2023-12-22",
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Carrie-Anne Moss", "Yahya Abdul-Mateen II"],
    synopsis: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, Mr. Anderson will have to choose to follow the white rabbit once more.",
    poster: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    trailer: "https://www.youtube.com/embed/9ix7TUGVYIo",
    prices: {
      standard: 12.99,
      premium: 18.99
    }
  },
  {
    id: "2",
    title: "Inception",
    genre: ["Action", "Adventure", "Sci-Fi"],
    duration: 162,
    rating: 4.8,
    releaseDate: "2023-07-16",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    prices: {
      standard: 11.99,
      premium: 17.99
    }
  },
  {
    id: "3",
    title: "Interstellar",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    duration: 169,
    rating: 4.7,
    releaseDate: "2023-11-07",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    prices: {
      standard: 12.99,
      premium: 18.99
    }
  }
];
