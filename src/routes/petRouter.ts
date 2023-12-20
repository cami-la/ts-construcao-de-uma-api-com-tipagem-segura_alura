import * as express from 'express'
import PetController from "../controller/PetController"

const router = express.Router()

const petController = new PetController()

router.post('/', petController.criarPet)

export default router