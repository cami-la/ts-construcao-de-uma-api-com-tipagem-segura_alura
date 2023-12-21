import PetEntity from "../entities/PetEntity";
import IPetRepository from "./interfaces/IPetRepository";

export default class PetRepository implements IPetRepository {
  constructor(private readonly repository: IPetRepository) {
  }

  createPet(pet: PetEntity): void {
    this.repository.createPet(pet);
  }

  listPets(): PetEntity[] {
    return this.repository.listPets()
  }

  updatePet(id: number, pet: PetEntity): void {
    this.repository.updatePet(id, pet)
  }

  deletePet(id: number): void {
    this.repository.deletePet(id)
  }

}