import PetAdopterRepository from "../repositories/PetAdopterRepository"
import PetAdopterEntity from "../entities/PetAdopterEntity"
import {Request, Response} from "express"
import {AddressEntity} from "../entities/AddressEntity";
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

  async updateAddressPetAdopter(req: Request, res: Response): Promise<void> {
    const {id} = req.params
    const {cidade, estado} = req.body
    const addressToUpdate = new AddressEntity(cidade, estado)
    let addressUpdated = await this.petAdopterRepository.updateAddressPetAdopter(Number(id), addressToUpdate);
    if (!addressUpdated.success) {
      res.status(404).json(addressUpdated)
    }
    res.sendStatus(200)
  }



}