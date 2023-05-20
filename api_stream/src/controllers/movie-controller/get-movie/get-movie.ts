import { IGetMovieRepository, IGetMovieParams} from "./protocols";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { ok, serverError } from "../../helpers";
import { Movie } from "../../../models";
export class GetMovieController implements IController {
    constructor(private readonly getMovieRepository: IGetMovieRepository) {
        this.getMovieRepository = getMovieRepository
    }
    async handle(
        httpRequest: HttpRequest<IGetMovieParams>
    ): Promise<HttpResponse<Movie[] | string>> {
        try {
            const id = httpRequest.params.id;
          const movie = await this.getMovieRepository.getMovie(id);
    
          return ok<Movie[]>(movie);
        } catch (error) {
          return serverError();
        }
      }
}