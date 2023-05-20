import { ObjectId } from "mongodb";
import { IUpdateMovieRepository, UpdateMovieParams } from "../../../controllers/movie-controller/update-movie/protocols";
import { MongoClient } from "../../../database/mongo";
import { Movie } from "../../../models/movie";
import { MongoMovie } from "../../mongo-protocols";

export class MongoUpdateMovieRepository implements IUpdateMovieRepository {
    async updateMovie(id: string , params: UpdateMovieParams): Promise<Movie> {
        await MongoClient.db.collection("movie").updateOne(
            {_id: new ObjectId(id)},
            {
                $set: {
                    ...params,
                }
            }
         );

        const user =await  MongoClient.db
        .collection<MongoMovie>("movie")
        .findOne({_id: new ObjectId(id) } )

        if(!user) {
            throw new Error("User not update")
        }
        const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
    }
}