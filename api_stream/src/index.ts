import express, { Response, Request, Router}  from "express"


const router = Router();

const app = express()
app.use(express.json())




const PORT = process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`console.log${PORT}`)
})
