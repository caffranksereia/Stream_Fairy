import { User } from "../../models/user"

export interface IGetUsersContollers {
    handle():any
}

export interface IGetUsersResponsitory {
    getUsers(): Promise<User[]>
}