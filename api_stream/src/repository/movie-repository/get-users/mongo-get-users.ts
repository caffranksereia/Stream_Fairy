import { IGetMoviesRespository } from "../../../controllers/movie-controller/get-movie/protocols";
import { MongoClient } from "../../../database/mongo";
import { Movie } from "../../../models/movie";

export class MongoGetMovieRepository implements IGetMoviesRespository {
    async getMovie(): Promise<Movie[]> {
        const movies = await MongoClient.db.collection<Omit<Movie,"id">>('users').find({}).toArray();

        
        return movies.map( ({_id, ...rest}) => ({
            ...rest,
            id: _id.toHexString()
        }))
    }
}