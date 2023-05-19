import { User } from "../models/user";
import { Movie } from "../models/movie";

export type MongoUser = Omit<User, "id">;
export type MongoMovie = Omit<Movie, "id">;