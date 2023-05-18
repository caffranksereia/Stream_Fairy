import express, { Response, Request, Router}  from "express"
import * as dotenv from "dotenv"
import swaggerUi from "swagger-ui-express"
dotenv.config();
import swaggerDocs from "./swagger.json"
const router = Router();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("swaggerUi",swaggerUi.serve, swaggerUi.setup(swaggerDocs) )
app.get('/', (req, res) => {
    res.send(":hello world")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`${PORT}`)
})
