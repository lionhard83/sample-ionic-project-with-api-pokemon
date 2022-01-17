import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
type Response = {
  results: {
    name: string;
    url: string;
  }[];
};


export interface DetailPokemon {
    abilities: any[];
    forms: any[];
    height: number;
    id: number;
    moves: any[];
    name: string;
    order: number;
    species: any;
    sprites: any;
    stats: any[];
    types: any[];
    weight: number;
}




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  loadData = () =>  this.http.get<Response>('https://pokeapi.co/api/v2/pokemon', {}).toPromise();

  getSinglePokemon = (id: number) =>
    this.http.get<DetailPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`, {}).toPromise();
}

