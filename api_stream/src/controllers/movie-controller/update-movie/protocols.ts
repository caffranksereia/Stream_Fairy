import { Movie } from "../../../models/movie";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface UpdateMovieParams {
    name?: string;
    description?:string
}

export interface IUpdateMovieController {
    handle(httpRquest: HttpRequest<any>):Promise<HttpResponse<Movie>>
}
export interface IUpdateMovieRepository {
    updateMovie(id: string, params:UpdateMovieParams): Promise<Movie>
}
