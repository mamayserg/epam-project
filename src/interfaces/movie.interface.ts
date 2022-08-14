export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number | string;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number | string;
}

export type MovieData = { id?: number } & Omit<Movie, 'id'>;