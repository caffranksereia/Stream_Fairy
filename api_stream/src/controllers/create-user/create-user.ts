import validator from "validator"; 
import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import { ICreateUserRepository , ICreateUserController, CreateUserParams} from "./protocol";

export class CreateUserController implements ICreateUserController {
    constructor(private readonly createUserRepository: ICreateUserRepository){}

    async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>> {
        try {
            const requeredFields = ["name","username","email","password"]
                for (const field of requeredFields) {
                    if(!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
                        return {
                            statusCode: 400,
                            body: "Fields $(field) is required"
                        }
                    }
                }
                const emailIsValid = validator.isEmail(httpRequest.body!.email)
                if(!emailIsValid) {
                    return {
                        statusCode: 400,
                        body: "Email is invalid"
                    }
                }
            
            const {body} = httpRequest
            const user = await await this.createUserRepository.createUser(httpRequest.body!)
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