import * as express from 'express'
import petRouter from "../routes/petRouter"
import petAdopterRouter from "./petAdopterRouter";

const router = (app: express.Router) => {
  app.use('/pets', petRouter)
  app.use('/petAdopters', petAdopterRouter)
}

export default router