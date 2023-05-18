import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import { ICreateUserRepository , ICreateUserController, CreateUserParams} from "./protocol";

export class CreateUserController implements ICreateUserController {
    constructor(private readonly createUserRepository: ICreateUserRepository){}

    async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>> {
        try {
            if(!httpRequest.body) {
                return {
                    statusCode: 400,
                    body: "Pleade specify a body"
                }
            }
            const {body} = httpRequest
            const user = await await this.createUserRepository.createUser(body)
            return {
                statusCode: 201,
                body:user
            }
        }catch (error) {
            return {
            statusCode: 500,
            body: "ooohhh somethiing went wrong"
            }
        }
        } 

}