import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';

const { apiPokemons } = environment;


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private _pokemons: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;
  public _imgUrl: string[] = []; 

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) { }
  
  public findAllPokemons(): void {
    let pkmList: Pokemon[] = [];

    fetch(apiPokemons + '?limit=150')
     .then(response => response.json())
     .then(function(allpokemon){
      console.log(allpokemon);
     allpokemon.results.forEach(function(pokemon: Pokemon){
        pkmList.push(pokemon);
        console.log(pokemon.name);
        let id:string = pokemon.url.substring(34, pokemon.url.length-1);
        console.log(id);
        pokemon.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + `${id}` +".png"  
     })
    })
    this._pokemons = pkmList;  
  }
  
  public pokemonById(id: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  }

  public pokemonByName(name: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.name === name);
  }
}
