import {Request, Response} from 'express'
import type TipoPet from '../types/PetType'

let pets: TipoPet[] = []

export default class PetController {

  criarPet(req: Request, res: Response) {
    const {id, adotado, especie, idade, name} = req.body as TipoPet
    const newPet: TipoPet = {id, adotado, especie, idade, name}
    pets.push(newPet)
    return res.status(201).json(newPet)
  }
}