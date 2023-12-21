import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {AddressEntity} from "./AddressEntity";

@Entity()
export default class PetAdopterEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @Column()
  nome: string
  @Column()
  senha: string
  @Column()
  celular: string
  @Column({ nullable: true })
  foto?: string
  @OneToOne(() => AddressEntity, {
    nullable: true,
    cascade: true,
    eager: true
  })
  @JoinColumn()
  endereco?: AddressEntity

  constructor(nome: string, senha: string, celular: string, foto?: string, endereco?: AddressEntity) {
    this.nome = nome
    this.senha = senha
    this.celular = celular
    this.foto = foto
    this.endereco = endereco
  }
}