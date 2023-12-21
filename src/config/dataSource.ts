import {DataSource} from "typeorm"

export const AppDataSource = new DataSource({
  type:  "sqlite",
  database: "./src/config/db.sqlite",
  entities: [],
  synchronize: true
})