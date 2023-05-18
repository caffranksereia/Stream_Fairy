import { User } from "../../models/user"
import {HttpResponde} from "../protocols"
export interface IGetUsersContollers {
    handle():Promise<HttpResponse<User[]>>
}

export interface IGetUsersResponsitory {
    getUsers(): Promise<User[]>
}