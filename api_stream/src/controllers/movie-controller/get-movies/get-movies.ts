// import { IGetMoviesContollers, IGetMoviesResponsitory } from "./protocols";
import { Movie } from "../../../models/movie";
import { IGetMoviesRespository} from "./protocols"
import { ok, serverError } from "../../helpers";
import { HttpResponse, IController } from "../../protocols";

export class GetMoviesController implements IController {
    constructor(private readonly getMoviesRepository: IGetMoviesRespository) {
        this.getMoviesRepository = getMoviesRepository
    }
    async handle(): Promise<HttpResponse<Movie[] | string>> {
        try {
          const movie = await this.getMoviesRepository.getMovie();
    
          return ok<Movie[]>(movie);
        } catch (error) {
          return serverError();
        }
      }
}