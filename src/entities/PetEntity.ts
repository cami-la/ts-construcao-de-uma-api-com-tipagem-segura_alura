import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import SpeciesEnum from "../enum/SpeciesEnum";
import PetAdopterEntity from "./PetAdopterEntity";
import PortEnum from "../enum/PortEnum";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @Column()
  nome: string
  @Column()
  especie: SpeciesEnum
  @Column({nullable: true})
  port?: PortEnum
  @Column()
  dataDeNascimento: Date
  @Column()
  adopted: boolean
  @ManyToOne(() => PetAdopterEntity, (petAdopter) => petAdopter.pets)
  petAdopter!: PetAdopterEntity

  constructor(nome: string, especie: SpeciesEnum, dataDeNascimento: Date, adopted: boolean, port?: PortEnum) {
    this.nome = nome
    this.especie = especie
    this.port = port
    this.dataDeNascimento = dataDeNascimento
    this.adopted = adopted
  }
}