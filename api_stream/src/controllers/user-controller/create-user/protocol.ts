import { User } from "../../../models/user";

export interface CreateUserParams {
    name: string;
    username:string;
    email: string;
    passwords: string;
    role?: string;
}

export interface ICreateUserRepository {
    createUser(params: CreateUserParams): Promise<User>
}