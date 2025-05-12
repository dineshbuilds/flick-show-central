
export interface Theater {
  id: string;
  name: string;
  location: string;
  screens: Screen[];
}

export interface Screen {
  id: string;
  name: string;
  capacity: number;
  rows: number;
  seatsPerRow: number;
}

export interface Showtime {
  id: string;
  movieId: string;
  theaterId: string;
  screenId: string;
  startTime: string;
  date: string;
  type: "standard" | "premium";
  reservedSeats: string[];
}

export const theaters: Theater[] = [
  {
    id: "1",
    name: "CinemaWorld Downtown",
    location: "123 Main Street, Downtown",
    screens: [
      {
        id: "1a",
        name: "Screen 1",
        capacity: 120,
        rows: 10,
        seatsPerRow: 12
      },
      {
        id: "1b",
        name: "Screen 2 - IMAX",
        capacity: 160,
        rows: 10,
        seatsPerRow: 16
      }
    ]
  },
  {
    id: "2",
    name: "CinemaWorld Eastside",
    location: "456 East Boulevard, Eastside",
    screens: [
      {
        id: "2a",
        name: "Screen 1",
        capacity: 100,
        rows: 10,
        seatsPerRow: 10
      },
      {
        id: "2b",
        name: "Screen 2",
        capacity: 100,
        rows: 10,
        seatsPerRow: 10
      }
    ]
  }
];

export const showtimes: Showtime[] = [
  {
    id: "st1",
    movieId: "1",
    theaterId: "1",
    screenId: "1a",
    startTime: "10:00",
    date: "2023-05-12",
    type: "standard",
    reservedSeats: ["A1", "A2", "B5", "C7"]
  },
  {
    id: "st2",
    movieId: "1",
    theaterId: "1",
    screenId: "1a",
    startTime: "13:30",
    date: "2023-05-12",
    type: "standard",
    reservedSeats: ["D4", "D5", "E7", "F2"]
  },
  {
    id: "st3",
    movieId: "1",
    theaterId: "1",
    screenId: "1b",
    startTime: "16:00",
    date: "2023-05-12",
    type: "premium",
    reservedSeats: ["A10", "A11", "B10", "B11"]
  },
  {
    id: "st4",
    movieId: "2",
    theaterId: "1",
    screenId: "1a",
    startTime: "19:30",
    date: "2023-05-12",
    type: "standard",
    reservedSeats: ["G7", "G8", "H4", "H5"]
  },
  {
    id: "st5",
    movieId: "3",
    theaterId: "2",
    screenId: "2a",
    startTime: "18:00",
    date: "2023-05-12",
    type: "standard",
    reservedSeats: ["C3", "C4", "D7", "E2"]
  }
];
