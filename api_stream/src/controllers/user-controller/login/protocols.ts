import { User } from "../../../models/user"

export interface ILoginParams {
    email?: string;
    username?: string;
    password: string;
}

