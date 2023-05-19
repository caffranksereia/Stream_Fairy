
import { Movie } from "../../../models/movie";
import { IUpdateMovieController, UpdateMovieParams, IUpdateMovieRepository } from "./protocols";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { badRequest, ok, serverError } from "../../helpers";

export class UpdateMovieController implements IController {
    constructor(private readonly updateMovieRepository: IUpdateMovieRepository) {}
    async handle(
        httpRequest: HttpRequest<UpdateMovieParams>
      ): Promise<HttpResponse<Movie | string>> {
        try {
          const id = httpRequest?.params?.id;
          const body = httpRequest?.body;
    
          if (!body) {
            return badRequest("Missing fields.");
          }
    
          if (!id) {
            return badRequest("Missing user id");
          }
    
          const allowedFieldsToUpdate: (keyof UpdateMovieParams)[] = [
              "name",
              "description"
          ];
    
          const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
            (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateMovieParams)
          );
    
          if (someFieldIsNotAllowedToUpdate) {
            return badRequest("Some received field is not allowed");
          }
    
          const movie = await this.updateMovieRepository.updateMovie(id, body);
    
          return ok<Movie>(movie);
        } catch (error) {
          return serverError();
        }
      }
}