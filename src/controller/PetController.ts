import {Request, Response} from 'express'
import PetType from "../types/PetType";
import SpeciesEnum from "../enum/SpeciesEnum";

let pets: PetType[] = []

let id = 0

function geraId(): number {
  id = id + 1;
  return id;
}
export default class PetController {

  createPet(req: Request, res: Response) {
    const { nome, especie, adotado, dataDeNascimento} = <PetType>req.body
    if (!Object.values(SpeciesEnum).includes(especie)) {
      return res.status(400).json({message: 'Invalid especie'})
    }

    const newPet: PetType = {id: geraId(), nome, especie, adotado, dataDeNascimento}
    pets.push(newPet)
    return res.status(201).json(newPet)
  }

  listPets(req: Request, res: Response) {
    return res.status(200).json(pets)
  }

  updatePet(req: Request, res: Response) {
    const {id} = req.params
    const {nome, especie, adotado, dataDeNascimento} = <PetType>req.body
    const petIndex = pets.findIndex(pet => pet.id === Number(id))
    if (petIndex === -1) {
      return res.status(404).json({message: 'Pet not found'})
    }
    pets[petIndex] = {id: Number(id), nome, especie, adotado, dataDeNascimento}
    return res.status(200).json(pets[petIndex])
  }

  deletePet(req: Request, res: Response) {
    const {id} = req.params
    const petIndex = pets.findIndex(pet => pet.id === Number(id))
    if (petIndex === -1) {
      return res.status(404).json({message: 'Pet not found'})
    }
    pets.splice(petIndex, 1)
    return res.status(204).send()
  }
}