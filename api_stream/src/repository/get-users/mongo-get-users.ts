import { ADDRGETNETWORKPARAMS } from "dns";
import { IGetUsersResponsitory } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";
import { MongoClient } from "../../database/mongo";

export class MongoGetUsersRepository implements IGetUsersResponsitory {
    async getUsers(): Promise<User[]> {
        const users = await MongoClient.db.collection<User>('users').find({}).toArray();

        
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