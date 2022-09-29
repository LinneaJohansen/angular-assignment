import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';

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
  
  /** 
   * gets name and ID of pokemons from the PokeAPI and stores it in a list of Pokemon objects. The fetch is limited to 150 pokemons
   * gets a picture of the pokemons from https://raw.githubusercontent.com/PokeAPI.
  */
  public findAllPokemons(): void {
    let pkmList: Pokemon[] = [];

    fetch(apiPokemons + '?limit=150')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon: Pokemon){
        pkmList.push(pokemon);
        let id:string = pokemon.url.substring(34, pokemon.url.length-1);
        pokemon.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + `${id}` +".png"  
     })
    })
    this._pokemons = pkmList;  
  }
  
  /**
   * get a Pokemon object by id
   * @param id of pokemon
   * @returns Pokemon
   */
  public pokemonById(id: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  }

  /**
   * get a Pokemon object by name
   * @param name of Pokemon
   * @returns Pokemon
   */
  public pokemonByName(name: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.name === name);
  }
}
