import PetEntity from "../entities/PetEntity";
import IPetRepository from "./interfaces/IPetRepository";
import {Repository} from "typeorm";
import PetAdopterEntity from "../entities/PetAdopterEntity";
import PortEnum from "../enum/PortEnum";

export default class PetRepository implements IPetRepository {
  constructor(private readonly petEntityRepository: Repository<PetEntity>, private readonly petAdopterRepository: Repository<PetAdopterEntity>) {
  }

  async createPet(pet: PetEntity): Promise<void> {
    await this.petEntityRepository.save(pet)
  }

  async listPets(): Promise<PetEntity[]> {
    return await this.petEntityRepository.find()
  }

  async updatePet(id: number, pet: PetEntity): Promise<{ success: boolean, message?: string }> {
    try {
      const petToUpdate = await this.petEntityRepository.findOne({where: {id}})
      if (!petToUpdate) {
        return {success: false, message: 'Pet not found'}
      }
      Object.assign(petToUpdate, pet)
      await this.petEntityRepository.save(petToUpdate)
      return {success: true}
    } catch (err) {
      console.log(err)
      return {success: false, message: 'Error updating pet'}
    }
  }

  async deletePet(id: number): Promise<{ success: boolean, message?: string }> {
    try {
      const petToRemove: PetEntity | null = await this.petEntityRepository.findOne({where: {id}})
      if (!petToRemove) {
        throw new Error('Pet not found')
      }
      await this.petEntityRepository.remove(petToRemove)
      return {success: true}
    } catch (err) {
      return {success: false, message: 'Error deleting pet'}
    }
  }

  async adoptPet(petId: number, adopterPetId: number): Promise<{ success: boolean; message?: string }> {
    const petToAdopt = await this.petEntityRepository.findOne({where: {id: petId}})
    if (!petToAdopt) {
      return {success: false, message: 'Pet not found'}
    }

    const petAdopter = await this.petAdopterRepository.findOne({where: {id: adopterPetId}})
    if (!petAdopter) {
      return {success: false, message: 'Pet adopter not found'}
    }

    petToAdopt.adopted = true
    petToAdopt.petAdopter = petAdopter

    await this.petEntityRepository.save(petToAdopt)
    return {success: true}
  }

  async findPetByPort(port: PortEnum): Promise<PetEntity[]> {
    const pets = await this.petEntityRepository.find({where: {port}})
    return pets
  }
}