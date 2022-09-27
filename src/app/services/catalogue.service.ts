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
    fetch(apiPokemons + '?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
      console.log(allpokemon);
     allpokemon.results.forEach(function(pokemon: Pokemon){
        pkmList.push(pokemon);
        console.log(pokemon.name);       
     })
    })
    this._pokemons = pkmList;
  }

  public getSprite(): void {
    
  }
      
          

/*
  public findAllPokemons(): void {
    this._loading = true;
    this.http.get<Pokemon[]>(apiPokemons)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemons: Pokemon[]) => {
            this._pokemons = pokemons;
            console.log(pokemons);
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })
  }*/
}
