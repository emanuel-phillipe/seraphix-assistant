import express, {Express, Request, Response} from "express"

import * as dotenv from "dotenv"
dotenv.config()

const app: Express = express();
 
app.use(express.json())

app.listen(process.env.PORT, ()=>{
  console.log("Servidor iniciou");
})

app.get("/teste", (req:Request, res:Response) => {
  return res.status(200).send("Olá, mundo!")
})