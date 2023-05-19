import { Movie } from "../../../models/movie";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface ICreateMovieController {
    handle(httpRequest: HttpRequest<CreateMovieParams>): Promise<HttpResponse<Movie>>
}

export interface CreateMovieParams {
    id:string;
    name: string;
   description:string
}

export interface ICreateMovieRepository {
    createMovie(params: CreateMovieParams): Promise<Movie>
}