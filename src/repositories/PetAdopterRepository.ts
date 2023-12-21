import IPetAdopterRepository from "./interfaces/IPetAdopterRepository";
import {Repository} from "typeorm";
import PetAdopterEntity from "../entities/PetAdopterEntity";
import {AddressEntity} from "../entities/AddressEntity";

export default class PetAdopterRepository implements IPetAdopterRepository {
  constructor(private readonly repository: Repository<PetAdopterEntity>) {
  }

  async createPetAdopter(petAdopter: PetAdopterEntity): Promise<void> {
    await this.repository.save(petAdopter);
  }

  async updateAddressPetAdopter(adopterId: number, address: AddressEntity): Promise<{
    success: boolean;
    message?: string
  }> {
    try {
      const petAdopterToAddressUpdate = await this.repository
        .findOne({where: {id: adopterId}})
      if (!petAdopterToAddressUpdate) {
        return {success: false, message: "Pet adopter not found"}
      }
      petAdopterToAddressUpdate.endereco = new AddressEntity(address.cidade, address.estado)
      await this.repository.save(petAdopterToAddressUpdate)
      return {success: true}
    } catch (error) {
      return {success: false, message: 'Error to update pet adopter address'}
    }
  }
}