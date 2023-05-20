import { GetUserParams, IGetUserRepository } from "./protocols";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { ok, serverError } from "../../helpers";
import { User } from "../../../models/user";
export class GetUserController implements IController {
    constructor(private readonly getUserRepository: IGetUserRepository) {
        this.getUserRepository = getUserRepository
    }
    async handle(
        httpRequest: HttpRequest<GetUserParams>
    ): Promise<HttpResponse<User[] | string>> {
        try {
            const id = httpRequest.params.id;
          const user = await this.getUserRepository.getUser(id);
    
          return ok<User[]>(user);
        } catch (error) {
          return serverError();
        }
      }
}