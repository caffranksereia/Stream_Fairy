import validator from "validator"; 
import { Movie } from "../../../models/movie";
import { ICreateMovieRepository ,  CreateMovieParams} from "./protocol";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { badRequest, created, serverError } from "../../helpers";

export class CreateMovieController implements IController {
    constructor(private readonly createMovieRepository: ICreateMovieRepository) {}
  
    async handle(
      httpRequest: HttpRequest<CreateMovieParams>
    ): Promise<HttpResponse<Movie | string>> {
      try {
        const requeredFields = ["name","description"]
        const user = await this.createMovieRepository.createMovie(
          httpRequest.body!
        );
  
        return created<Movie>(user);
      } catch (error) {
        return serverError();
      }
    }
  }