import { IGetUserRepository } from "../../../controllers/user-controller/get-user/protocols";
import { User } from "../../../models/user";
import { MongoClient } from "../../../database/mongo";
import { ObjectId } from "mongodb";
import { MongoUser } from "../../mongo-protocols";

export class MongoGetUserRepository implements IGetUserRepository {
    async getUser(id: string): Promise<User> {
            const user = await MongoClient.db
            .collection<MongoUser>("users")
            .findOne({ _id: new ObjectId(id) });
      
    
        if (!user) {
            throw new Error("User not found");
          }
          const {_id, ...rest} = user
          
          return { id: _id.toHexString(), ...rest };
    }
}