import { IGetUsersResponsitory } from "../../../controllers/user-controller/get-users/protocols";
import { User } from "../../../models/user";
import { MongoClient } from "../../../database/mongo";

export class MongoGetUsersRepository implements IGetUsersResponsitory {
    async getUsers(): Promise<User[]> {
        const users = await MongoClient.db.collection<Omit<User,"id">>('users').find({}).toArray();

        
        return users.map( ({_id, ...rest}) => ({
            ...rest,
            id: _id.toHexString()
        }))
    }
}