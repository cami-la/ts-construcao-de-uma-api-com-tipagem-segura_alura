import PetEntity from "../entities/PetEntity";
import IPetRepository from "./interfaces/IPetRepository";
import {Repository} from "typeorm";

export default class PetRepository implements IPetRepository {
  constructor(private readonly repository: Repository<PetEntity>) {
  }

  async createPet(pet: PetEntity): Promise<void> {
    await this.repository.save(pet)
  }

  async listPets(): Promise<PetEntity[]> {
    return await this.repository.find()
  }

  async updatePet(id: number, pet: PetEntity): Promise<{ success: boolean, message?: string }> {
    try {
      const petToUpdate = await this.repository.findOne({where: {id}})
      if (!petToUpdate) {
        return {success: false, message: 'Pet not found'}
      }
      Object.assign(petToUpdate, pet)
      await this.repository.save(petToUpdate)
      return {success: true}
    } catch (err) {
      console.log(err)
      return {success: false, message: 'Error updating pet'}
    }
  }

  async deletePet(id: number): Promise<{ success: boolean, message?: string }> {
    try {
      const petToRemove: PetEntity | null = await this.repository.findOne({where: {id}})
      if (!petToRemove) {
        throw new Error('Pet not found')
      }
      await this.repository.remove(petToRemove)
      return {success: true}
    } catch (err) {
      return {success: false, message: 'Error deleting pet'}
    }
  }
}