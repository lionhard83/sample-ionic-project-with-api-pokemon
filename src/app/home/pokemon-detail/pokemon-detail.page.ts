import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailPokemon, PokemonService } from 'src/app/providers/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  currentPokemon: DetailPokemon;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }
  async ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.currentPokemon = await this.pokemonService.getSinglePokemon(id);

  }

}
