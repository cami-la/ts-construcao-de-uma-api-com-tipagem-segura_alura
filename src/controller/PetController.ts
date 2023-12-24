import {Request, Response} from 'express'
import PetType from "../types/PetType";
import SpeciesEnum from "../enum/SpeciesEnum";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";
import PortEnum from "../enum/PortEnum";

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
    const {nome, especie, port, adopted, dataDeNascimento} = <PetEntity>req.body
    if (!Object.values(SpeciesEnum).includes(especie)) {
      return res.status(400).json({message: 'Invalid especie'})
    }

    if (port && !(port in PortEnum)) {
      return res.status(400).json({message: 'Invalid port'})
    }

    const newPet = new PetEntity(
      nome,
      especie,
      dataDeNascimento,
      adopted,
      port
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

  async adoptPet(req: Request, res: Response) {
    const {petId, petAdopterId} = req.params
    const {success, message} = await this.petRepository.adoptPet(Number(petId), Number(petAdopterId));
    if (!success) {
      return res.status(400).json({message})
    }
    return res.sendStatus(204)
  }

  async findPetByPort(req: Request, res: Response) {
    const {port} = req.query
    const pets = await this.petRepository.findPetByPort(port as PortEnum)
    return res.status(200).json(pets)
  }
}