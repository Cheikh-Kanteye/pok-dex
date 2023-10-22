import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../models/pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styles: [],
})
export class PokemonDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  currentPokemon: Pokemon | undefined;

  ngOnInit() {
    const pokemonID: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonID) {
      this.currentPokemon = this.pokemonService.getPokemonByID(+pokemonID);
    }
  }

  goBack() {
    this.router.navigate(["/pokemons"]);
  }
}
