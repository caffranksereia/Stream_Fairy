import { User } from "../../../models/user";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface UpdateUserParams {
    name?: string;
    email?:string;
    username?: string;
    password?: string;
    role?: string
}

export interface IUpdateUserController {
    handle(httpRquest: HttpRequest<any>):Promise<HttpResponse<User>>
}
export interface IUpdateUserRepository {
    updateUser(id: string, params:UpdateUserParams): Promise<User>
}