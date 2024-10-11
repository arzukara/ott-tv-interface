export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    genres: { name: string }[];
    vote_average: number;
    imageUrl: string;
    backdropUrl: string;
  }
  