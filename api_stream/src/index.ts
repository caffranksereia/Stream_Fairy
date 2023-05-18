import express, { Response, Request, Router}  from "express"
import * as dotenv from "dotenv"


const router = Router();

const app = express()
app.use(express.json())



