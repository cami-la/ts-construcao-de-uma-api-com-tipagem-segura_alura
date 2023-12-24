import PetEntity from "../../entities/PetEntity";
import PortEnum from "../../enum/PortEnum";

export default interface IPetRepository {
  createPet(pet: PetEntity): void

  listPets(): Array<PetEntity[]> | Promise<PetEntity[]>

  updatePet(id: number, pet: PetEntity): Promise<{ success: boolean, message?: string }> | void

  deletePet(id: number): Promise<{ success: boolean, message?: string }> | void

  adoptPet(petId: number, adopterPetId: number): Promise<{ success: boolean, message?: string }> | void

  findPetByPort(port: PortEnum): Promise<PetEntity[]> | PetEntity[]

  findPetByGenericField<T extends keyof PetEntity>(field: T, value: PetEntity[T]): Promise<PetEntity[]> | PetEntity[]
}