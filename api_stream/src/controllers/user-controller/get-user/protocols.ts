import { User } from "../../../models/user"
import { HttpRequest, HttpResponse } from "../../protocols"

export interface GetUserParams{
    getUser(): Promise<User[]>
}
export interface IUpdateUserController {
    handle(httpRquest: HttpRequest<any>):Promise<HttpResponse<User>>
}
export interface IGetUserRepository {
    getUser(id: string): Promise<User>
}