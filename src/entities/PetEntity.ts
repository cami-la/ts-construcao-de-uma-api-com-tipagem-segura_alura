import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import SpeciesEnum from "../enum/SpeciesEnum";

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
  adotado: boolean

  constructor(nome: string, especie: SpeciesEnum, dataDeNascimento: Date, adotado: boolean) {
    this.nome = nome
    this.especie = especie
    this.dataDeNascimento = dataDeNascimento
    this.adotado = adotado
  }
}