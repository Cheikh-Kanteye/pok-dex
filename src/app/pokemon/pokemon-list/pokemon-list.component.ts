import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../models/pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styles: [],
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  gotoDetails(id: number) {
    this.router.navigate(["/pokemons", id]);
  }
}
