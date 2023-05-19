import {
    CreateMovieParams,
    ICreateMovieRepository,}
     from "../../../controllers/movie-controller/create-movie/protocol";
  import { MongoClient } from "../../../database/mongo";
  import { Movie } from "../../../models/movie";
  import { MongoMovie } from "../../mongo-protocols";
  
  export class MongoCreateMovieRepository implements ICreateMovieRepository {
    async createMovie(params: CreateMovieParams): Promise<Movie> {
      const { insertedId } = await MongoClient.db
        .collection("movie")
        .insertOne(params);
  
      const user = await MongoClient.db
        .collection<MongoMovie>("movie")
        .findOne({ _id: insertedId });
  
      if (!user) {
        throw new Error("User not created");
      }
  
      const { _id, ...rest } = user;
  
      return { id: _id.toHexString(), ...rest };
    }
  }