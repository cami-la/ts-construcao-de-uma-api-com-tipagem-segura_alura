import PetEntity from "../../entities/PetEntity";

export default interface IPetRepository {
  createPet(pet: PetEntity): void

  listPets(): Array<PetEntity>

  updatePet(id: number, pet: PetEntity): void

  deletePet(id: number): void
}