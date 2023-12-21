import PetAdopterEntity from "../../entities/PetAdopterEntity";

export default interface IPetAdopterRepository {
  createPetAdopter(petAdopter: PetAdopterEntity): void | Promise<void>
}