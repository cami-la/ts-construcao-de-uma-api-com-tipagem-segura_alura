import * as express from "express"
import router from "./routes"
import "reflect-metadata"
import {AppDataSource} from "./config/dataSource"

const app = express();
app.use(express.json());

router(app)
AppDataSource.initialize().then(() => {
  console.log("Database connected")
})
  .catch((err) => {
    console.log(err)
  })

export default app
