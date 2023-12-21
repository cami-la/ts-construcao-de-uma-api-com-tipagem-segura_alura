import {DataSource} from "typeorm"
import PetEntity from "../entities/PetEntity";
import PetAdopterEntity from "../entities/PetAdopterEntity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/db.sqlite",
  entities: [PetEntity, PetAdopterEntity],
  synchronize: true
})