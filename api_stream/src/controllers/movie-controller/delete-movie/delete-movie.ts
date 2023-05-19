import { badRequest, ok, serverError } from "../../helpers";
import { Movie } from "../../../models/movie";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { IDeleteMovieRepository } from "./protocols";

export class DeleteMovieController implements IController {
  constructor(private readonly deleteMovieRepository: IDeleteMovieRepository) {}

  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Movie | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Missing user id");
      }

      const user = await this.deleteMovieRepository.deleteUser(id);

      return ok<Movie>(user);
    } catch (error) {
      return serverError();
    }
  }
}