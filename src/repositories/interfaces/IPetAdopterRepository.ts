import PetAdopterEntity from "../../entities/PetAdopterEntity";
import {AddressEntity} from "../../entities/AddressEntity";

export default interface IPetAdopterRepository {
  createPetAdopter(petAdopter: PetAdopterEntity): void | Promise<void>
  updateAddressPetAdopter (adopterId: number, address: AddressEntity): void | Promise<{ success: boolean, message?: string }>
}