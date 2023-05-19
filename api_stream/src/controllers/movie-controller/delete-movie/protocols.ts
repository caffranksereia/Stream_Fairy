import { Movie } from "../../../models/movie";

export interface IDeleteMovieRepository {
  deleteUser(id: string): Promise<Movie>;
}