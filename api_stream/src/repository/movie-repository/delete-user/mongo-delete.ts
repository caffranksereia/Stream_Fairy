import { ObjectId } from "mongodb";

import { IDeleteMovieRepository } from "../../../controllers/movie-controller/delete-movie/protocols";
import { MongoClient } from "../../../database/mongo";
import { Movie } from "../../../models/movie";
import { MongoMovie} from "../../mongo-protocols";

export class MongoDeleteMovieRepository implements IDeleteMovieRepository {
  async deleteUser(id: string): Promise<Movie> {
    const user = await MongoClient.db
      .collection<MongoMovie>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("User not found");
    }

    const { deletedCount } = await MongoClient.db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("User not deleted");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}