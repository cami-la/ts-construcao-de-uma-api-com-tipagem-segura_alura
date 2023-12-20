import SpeciesEnum from "../enum/SpeciesEnum";

type PetType = {
  id: number
  nome: string
  especie: SpeciesEnum
  adotado: string
  idade: number
}

export default PetType