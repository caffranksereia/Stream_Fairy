
import { User } from "../../../models/user";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { ICreateUserRepository , CreateUserParams} from "./protocol";
import { created, serverError } from "../../helpers";

export class CreateUserController implements IController {
    constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const requiredFields = ["name", "username", "email", "password"];

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

      return created<User>(user);
    } catch (error) {
      return serverError();
    }
  }

}