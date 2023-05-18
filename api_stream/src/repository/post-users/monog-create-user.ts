import { CreateUserParams, ICreateUserRepository } from "../../controllers/create-user/protocol";
import { User } from "../../models/user";

export class MongoCreateUser implements ICreateUserRepository {
    async createUser(params: CreateUserParams): Promise<User> {
        throw new Error("Metho not implemented")
    }
}