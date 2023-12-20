import {Request, Response} from 'express'
import type TipoPet from '../types/PetType'

let pets: TipoPet[] = []

export default class PetController {

  createPet(req: Request, res: Response) {
    const {id, adotado, especie, idade, nome} = req.body as TipoPet
    const newPet: TipoPet = {id, adotado, especie, idade, nome}
    pets.push(newPet)
    return res.status(201).json(newPet)
  }

  listPets(req: Request, res: Response) {
    return res.status(200).json(pets)
  }

  updatePet(req: Request, res: Response) {
    const {id} = req.params
    const {adotado, especie, idade, nome} = req.body as TipoPet
    const petIndex = pets.findIndex(pet => pet.id === Number(id))
    if (petIndex === -1) {
      return res.status(404).json({message: 'Pet not found'})
    }
    pets[petIndex] = {id: Number(id), adotado, especie, idade, nome}
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