import PetAdopterRepository from "../repositories/PetAdopterRepository"
import PetAdopterEntity from "../entities/PetAdopterEntity"
import {Request, Response} from "express"
export default class PetAdopterController {
  constructor(private readonly petAdopterRepository: PetAdopterRepository) {
  }

  async createPetAdopter(req: Request, res: Response): Promise<void> {
    const {nome, celular, endereco, foto, senha} = <PetAdopterEntity>req.body

    const newPetAdopter = new PetAdopterEntity(
      nome,
      senha,
      celular,
      foto,
      endereco
    )

    await this.petAdopterRepository.createPetAdopter(newPetAdopter)
    res.status(201).json(newPetAdopter)
  }
}