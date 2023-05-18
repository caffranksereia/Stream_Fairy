import express, { Response, Request, Router, response}  from "express"
import * as dotenv from "dotenv"
import swaggerUi from "swagger-ui-express"
import { MongoGetUsersRepository } from "./repository/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-user";
import { MongoClient } from "./database/mongo";


const main = async () =>{
    const router = Router();

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    
    
    
    dotenv.config();


    await MongoClient.connect()

    app.get('/', (req, res) => {
        res.send(":hello world")
    })

    app.get('/users', async (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();
    
        const getUsersController= new GetUsersController(mongoGetUsersRepository) 
    
        const {body, statusCode} = await getUsersController.handle()
    
        res.send(body).status(statusCode)
    })

    app.post('/user', async (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();
    
        const getUsersController= new GetUsersController(mongoGetUsersRepository) 
    
        const {body, statusCode} = await getUsersController.handle()
    
        res.send(body).status(statusCode)
    })

    const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`${PORT}`)
})

}

main();