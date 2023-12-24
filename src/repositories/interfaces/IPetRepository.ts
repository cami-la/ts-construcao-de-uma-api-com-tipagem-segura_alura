import PetEntity from "../../entities/PetEntity";

export default interface IPetRepository {
  createPet(pet: PetEntity): void

  listPets(): Array<PetEntity[]> | Promise<PetEntity[]>

  updatePet(id: number, pet: PetEntity): Promise<{ success: boolean, message?: string }> | void

  deletePet(id: number): Promise<{ success: boolean, message?: string }> | void

  adoptPet(petId: number, adopterPetId: number): Promise<{ success: boolean, message?: string }> | void
}