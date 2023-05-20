import { Movie } from "../../../models/movie"
import {HttpResponse} from "../../protocols"
export interface IGetMoviesContollers {
    handle():Promise<HttpResponse<Movie[]>>
}

export interface IGetMoviesRespository {
    getMovie(): Promise<Movie[]>
}