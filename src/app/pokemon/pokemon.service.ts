import { Injectable } from "@angular/core";
import { Pokemon } from "./models/pokemon";
import { POKEMONS } from "./mocks/mocks-pokemon-list";

@Injectable()
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonByID(pokemonID: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id == pokemonID);
  }

  gtePokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
