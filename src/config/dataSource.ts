import {DataSource} from "typeorm"
import PetEntity from "../entities/PetEntity";
import PetAdopterEntity from "../entities/PetAdopterEntity";
import {AddressEntity} from "../entities/AddressEntity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/db.sqlite",
  entities: [PetEntity, PetAdopterEntity, AddressEntity],
  synchronize: true
})