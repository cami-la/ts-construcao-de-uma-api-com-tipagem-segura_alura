import {Request, Response} from 'express'
import PetType from "../types/PetType";
import SpeciesEnum from "../enum/SpeciesEnum";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";

let pets: PetType[] = []

let id = 0

function geraId(): number {
  id = id + 1;
  return id;
}

export default class PetController {
  constructor(private readonly petRepository: PetRepository) {
  }

  async createPet(req: Request, res: Response) {
    const {nome, especie, adotado, dataDeNascimento} = <PetEntity>req.body
    if (!Object.values(SpeciesEnum).includes(especie)) {
      return res.status(400).json({message: 'Invalid especie'})
    }
    const newPet = new PetEntity(
      nome,
      especie,
      dataDeNascimento,
      adotado
    )
    await this.petRepository.createPet(newPet)
    return res.status(201).json(newPet)
  }

  async listPets(req: Request, res: Response) {
    const pets = await this.petRepository.listPets()
    return res.status(200).json(pets)
  }

  async updatePet(req: Request, res: Response) {
    const {id} = req.params
    const {success, message} = await this.petRepository.updatePet(Number(id), <PetEntity>req.body)
    if (!success) {
      return res.status(400).json({message})
    }
    return res.sendStatus(204)
  }

  async deletePet(req: Request, res: Response) {
    const {id} = req.params
    const {success, message} = await this.petRepository.deletePet(Number(id));
    if (!success) {
      return res.status(400).json({message})
    }
    return res.sendStatus(204)
  }
}