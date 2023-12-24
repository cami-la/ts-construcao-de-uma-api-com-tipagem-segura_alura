import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import SpeciesEnum from "../enum/SpeciesEnum";
import PetAdopterEntity from "./PetAdopterEntity";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @Column()
  nome: string
  @Column()
  especie: SpeciesEnum
  @Column()
  dataDeNascimento: Date
  @Column()
  adopted: boolean
  @ManyToOne(() => PetAdopterEntity, (petAdopter) => petAdopter.pets)
  petAdopter!: PetAdopterEntity

  constructor(nome: string, especie: SpeciesEnum, dataDeNascimento: Date, adotado: boolean) {
    this.nome = nome
    this.especie = especie
    this.dataDeNascimento = dataDeNascimento
    this.adopted = adotado
  }
}