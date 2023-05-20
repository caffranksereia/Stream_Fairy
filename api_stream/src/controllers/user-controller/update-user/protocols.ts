import { User } from "../../../models/user";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface IUpdateUserParams {
    name?: string;
    email?:string;
    username?: string;
    password?: string;
    role?: string
}
export interface IUpdateUserRepository {
    updateUser(id: string, params:IUpdateUserParams): Promise<User>
}