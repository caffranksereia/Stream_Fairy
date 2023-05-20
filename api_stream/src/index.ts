import express, { Response, Request, Router, response}  from "express"
import * as dotenv from "dotenv"
import swaggerUi from "swagger-ui-express"
import { MongoCreateUserRepository, MongoGetUsersRepository, 
    MongoUpdateUserRepository, MongoDeleteUserRepository, 
    MongoGetMoviesRepository, MongoCreateMovieRepository, 
    MongoUpdateMovieRepository, MongoDeleteMovieRepository} from "./repository"
import { CreateUserController, GetUsersController, 
    UpdateUserController, DeleteUserController,
    GetMoviesController, 
    CreateMovieController, UpdateMovieController, 
    DeleteMovieController} from "./controllers"
import { MongoClient } from "./database"
import { MongoGetUserRepository } from "./repository/user-repository/get-user/mongo-get-user"
import { GetUserController } from "./controllers/user-controller/get-user/get-user"
import {GetMovieController} from "./controllers/movie-controller/get-movie/get-movie"
import { MongoGetMovieRepository } from "./repository/movie-repository/get-movie/mongo-get"

const main = async () =>{
    const router = Router();

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    
    
    
    dotenv.config();


    await MongoClient.connect()
 // Users route
    app.get('/', (req, res) => {
        res.send(":hello world")
    })
    app.get('/users/:id', async (req, res) => {
        const mongoGetUserRepository = new MongoGetUserRepository()
        
        const getUserController = new GetUserController(mongoGetUserRepository)

        const {body, statusCode} = await getUserController.handle({params: req.params

        })
        res.send(body).status(statusCode)
      
    })
    app.get('/users', async (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();
    
        const getUsersController= new GetUsersController(mongoGetUsersRepository) 
    
        const {body, statusCode} = await getUsersController.handle()
    
        res.send(body).status(statusCode)
    })

    app.post('/users', async (req, res) => {
        const mongoCreateRepository = new MongoCreateUserRepository();
    
        const createUserController= new CreateUserController(mongoCreateRepository) 
    
        const {body, statusCode} = await createUserController.handle({body: req.body})
    
        res.send(body).status(statusCode)
    })
    app.put('/users/:id', async (req, res) => {
        const mongoUpdateUserRepository = new MongoUpdateUserRepository();
    
        const updateUserController= new UpdateUserController(mongoUpdateUserRepository) 
    
        const {body, statusCode} = await updateUserController.handle({body: req.body, params: req.params})
    
        res.send(body).status(statusCode)
    })

    app.delete("/users/:id", async (req, res) => {
        const mongoDeleteUserRepository = new MongoDeleteUserRepository();
    
        const deleteUserController = new DeleteUserController(
          mongoDeleteUserRepository
        );
    
        const { body, statusCode } = await deleteUserController.handle({
          params: req.params,
        });
    
        res.status(statusCode).send(body);
      });

      // Movie route
      app.get('/movie/:id', async (req, res) => {
        const mongoGetMovieRepository = new MongoGetMovieRepository()
        
        const getMovieController = new GetMovieController(mongoGetMovieRepository)

        const {body, statusCode} = await getMovieController.handle({params: req.params
        })
        res.send(body).status(statusCode)
      
    })

    app.get('/movie', async (req, res) => {
        const mongoGetMovieRepository = new MongoGetMoviesRepository();
    
        const getMoviesController= new GetMoviesController(mongoGetMovieRepository) 
    
        const {body, statusCode} = await getMoviesController.handle()
    
        res.send(body).status(statusCode)
    })

    app.post('/movie', async (req, res) => {
        const mongoMovieRepository = new MongoCreateMovieRepository();
    
        const createMovieController= new CreateMovieController(mongoMovieRepository) 
    
        const {body, statusCode} = await createMovieController.handle({body: req.body})
    
        res.send(body).status(statusCode)
    })

    app.patch('/movie/:id', async (req, res) => {
        const mongoUpdateMovieRepository = new MongoUpdateMovieRepository();
    
        const updateMovieController= new UpdateMovieController(mongoUpdateMovieRepository) 
    
        const {body, statusCode} = await updateMovieController.handle({body: req.body, params: req.params})
    
        res.send(body).status(statusCode)
    })

    app.delete("/movie/:id", async (req, res) => {
        const mongoDeleteMovieRepository = new MongoDeleteMovieRepository();
    
        const deleteMovieController = new DeleteMovieController(
            mongoDeleteMovieRepository
        );
    
        const { body, statusCode } = await deleteMovieController.handle({
          params: req.params,
        });
    
        res.status(statusCode).send(body);
      });

    
    const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`${PORT}`)
})

}

main();