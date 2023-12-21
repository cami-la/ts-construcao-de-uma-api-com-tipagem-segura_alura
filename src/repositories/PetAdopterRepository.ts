import IPetAdopterRepository from "./interfaces/IPetAdopterRepository";
import {Repository} from "typeorm";
import PetAdopterEntity from "../entities/PetAdopterEntity";

export default class PetAdopterRepository implements IPetAdopterRepository {
  constructor(private readonly repository: Repository<PetAdopterEntity>) {
  }

  async createPetAdopter(petAdopter: PetAdopterEntity): Promise<void> {
    await this.repository.save(petAdopter);
  }
}