import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import SpeciesEnum from "../enum/SpeciesEnum";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  nome: string
  @Column()
  especie: SpeciesEnum
  @Column()
  dataDeNascimento: Date
  @Column()
  adotado: boolean
}