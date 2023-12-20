import * as express from 'express'
import petRouter from "../routes/petRouter"

const router = (app: express.Router) => {
  app.use('/pets', petRouter)
}

export default router