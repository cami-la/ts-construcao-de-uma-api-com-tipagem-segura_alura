import * as express from 'express'
import {Request, Response} from 'express'
import {AppDataSource} from "../config/dataSource"
import PetAdopterRepository from "../repositories/PetAdopterRepository";
import PetAdopterController from "../controller/PetAdopterController";

const router = express.Router()

const petAdopterRepository = new PetAdopterRepository(AppDataSource.getRepository("PetAdopterEntity"))

const petAdopterController = new PetAdopterController(petAdopterRepository)

router.post('/', (req: Request, res:Response) => petAdopterController.createPetAdopter(req, res))
router.patch('/:id', (req: Request, res:Response) => petAdopterController.updateAddressPetAdopter(req, res))

export default router