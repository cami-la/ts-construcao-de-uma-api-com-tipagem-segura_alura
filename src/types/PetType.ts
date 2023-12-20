import SpeciesEnum from "../enum/SpeciesEnum";

type PetType = {
  id: number
  nome: string
  especie: SpeciesEnum
  adotado: string
  dataDeNascimento: Date
}

export default PetType