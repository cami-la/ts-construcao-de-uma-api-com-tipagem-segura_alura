import PetEntity from "../entities/PetEntity";
import IPetRepository from "./interfaces/IPetRepository";
import {Repository} from "typeorm";

export default class PetRepository implements IPetRepository {
  private repository: Repository<PetEntity>;

  constructor(repository: Repository<PetEntity>) {
    this.repository = repository;
  }

  createPet(pet: PetEntity): void {
    this.repository.save(pet);
  }

  listPets(): PetEntity[] {
    throw new Error("Method not implemented.");
  }

  updatePet(id: number, pet: PetEntity): void {
    throw new Error("Method not implemented.");
  }

  deletePet(id: number): void {
    throw new Error("Method not implemented.");
  }

}