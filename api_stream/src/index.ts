import express, { Response, Request, Router}  from "express"
import * as dotenv from "dotenv"

dotenv.config();

const router = Router();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))



const PORT = process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`console.log${PORT}`)
})
