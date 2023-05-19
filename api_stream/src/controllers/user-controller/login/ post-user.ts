import { User } from "../../../models/user";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { ILoginParams }from "./protocols";
import { ok, serverError } from "../../helpers";
export class PostLoginUserController implements IController {
    constructor(private readonly getUserRepository: ILoginParams) {}

  async handle(
    httpRequest: HttpRequest<ILoginParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      cconst { email, password } = req.body

      const user = await this.getUserRepository.findOneBy({ email })

      if (!user) {
        throw new BadRequestError('E-mail ou senha inválidos')
    }

    const verifyPass = await bcrypt.compare(password, user.password)

		if (!verifyPass) {
			throw new BadRequestError('E-mail ou senha inválidos')
		}

        const { password: _, ...userLogin } = user

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );
      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
  async getProfile(req: Request, res: Response) {
    return res.json(req.user)
}

}