import { User } from "../../../models/user"

export interface IGetUsersResponsitory {
    getUsers(): Promise<User[]>
}