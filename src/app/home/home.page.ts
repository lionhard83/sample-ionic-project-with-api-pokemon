import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../providers/pokemon.service';

type Pokemon = {
  id: number | string;
  name: string;
  url: string;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  value = 0;
  pokemons: Pokemon[] = [];
  letters: string[] = [];
  container: {letter: string; values: Pokemon[]}[] = [];
  constructor(private pokemonService: PokemonService) {}
  async ngOnInit() {
    const {results} = await this.pokemonService.loadData();
    this.pokemons = results.map(item => ({
        ...item,
        id: Number(item.url.split('/')[6])
    })).sort((a, b) =>  a.name.localeCompare(b.name));
    this.letters = [...new Set(this.pokemons.map(({name}) => name[0]))];

    // const container = this.letters.reduce((acc, item, index) => {
    //   acc[index] = {letter: item, values: this.getPokemonByChar(item)};
    //   return acc;
    // } , []);
    // [b, c, i....]
    // [{letter: b, values: []},   ]
    this.container = this.letters.map((item) =>
    (
      {
        letter: item,
        values: this.getPokemonByChar(item)
      }
    ));
    console.log('container:', this.container);
  }

  getPokemonByChar = (letter: string) =>
    this.pokemons.filter(({name}) => name[0]  === letter);


  increment = () => {
    this.value++;
  };

  itemSelected = (pokemon: Pokemon) => {
    console.log(pokemon);
  };

}
