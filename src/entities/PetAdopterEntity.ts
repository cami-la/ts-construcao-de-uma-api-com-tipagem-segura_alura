import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
  @Column({ nullable: true })
  endereco?: string

  constructor(nome: string, senha: string, celular: string, foto?: string, endereco?: string) {
    this.nome = nome
    this.senha = senha
    this.celular = celular
    this.foto = foto
    this.endereco = endereco
  }
}