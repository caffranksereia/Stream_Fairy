import { ADDRGETNETWORKPARAMS } from "dns";
import { IGetUsersResponsitory } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersResponsitory {
    async getUsers(): Promise<User[]> {
        return [
            {
                name: "admin",
                username: "admin",
                password: "1",
                email: " aaaa@aaa",
            },
        ]
    }
}