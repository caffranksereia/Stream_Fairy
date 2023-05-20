import { IGetMovieRepository } from "../../../controllers/movie-controller/get-movie/protocols";
import { MongoClient } from "../../../database/mongo";
import { ObjectId } from "mongodb";
import { MongoMovie } from "../../mongo-protocols";
import { Movie } from "../../../models";

export class MongoGetMovieRepository implements IGetMovieRepository {
    async getMovie(id: string): Promise<Movie> {
            const user = await MongoClient.db
            .collection<MongoMovie>("users")
            .findOne({ _id: new ObjectId(id) });
      
    
        if (!user) {
            throw new Error("User not found");
          }
          const {_id, ...rest} = user
          
          return { id: _id.toHexString(), ...rest };
    }
}