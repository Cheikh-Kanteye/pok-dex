import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./directives/border-card.directive";
import { PokemonTypeColorPipe } from "./pipes/pokemon-type-color.pipe";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
  { path: "pokemons/:id", component: PokemonDetailsComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
