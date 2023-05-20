import { Movie } from "../../../models/movie"
import { HttpRequest, HttpResponse } from "../../protocols"

export interface IGetMovieParams{
    getMovie(): Promise<Movie[]>
}
export interface IMovieController {
    handle(httpRquest: HttpRequest<any>):Promise<HttpResponse<Movie>>
}
export interface IGetMovieRepository {
    getMovie(id: string): Promise<Movie>
}