import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CatalogueService } from './catalogue.service';
import { TrainerService } from './trainer.service';
import { Trainer } from '../models/trainer.model';
import { Pokemon } from '../models/pokemon.model';
import { finalize, Observable, tap } from 'rxjs';
const { apiKey, apiTrainers} = environment;

@Injectable({
  providedIn: 'root'
})
export class CaughtService {

  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(
    private http: HttpClient,
    private readonly catalogueService: CatalogueService,
    private readonly trainerService: TrainerService,
  ) { }

  //patch method to delete a pokemon from a trainer in the api.
  public removeFromPokemons(pokemonToRemove: Pokemon): Observable<Trainer> {
    if(!this.trainerService.trainer){
      throw new Error("addToPokemons: No trainer found")
    }
    
    const trainer: Trainer = this.trainerService.trainer
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })

    this._loading = true;
    let newPokemonList: Pokemon[] = [];

    for(let pokemon of trainer.pokemon){
      if(pokemon.name != pokemonToRemove.name){
        newPokemonList = [...newPokemonList, pokemon]
      }
    }

    return this.http.patch<Trainer>(`${apiTrainers}/${trainer.id}`, {
      pokemon: newPokemonList
    }, {
      headers
    })
    .pipe(
      tap((updatedTrainer: Trainer) =>{
        this.trainerService.trainer = updatedTrainer;
      }),
      finalize(() => {
        this._loading = false
      })
    )
  }

  //patch metod to update api, adds a pokemon to trainers pokemons
  public addToPokemons(pokemonAdding: Pokemon): Observable<Trainer> {
    console.log("DO WE LOG HERE?")
    if(!this.trainerService.trainer){
      throw new Error("addToPokemons: No trainer found")
    }
    
    const trainer: Trainer = this.trainerService.trainer
    const pokemon: Pokemon | undefined = this.catalogueService.pokemonByName(pokemonAdding.name)
    if(!pokemon){
      throw new Error("addToPokemon: no pokemon found")
    }
    if(this.trainerService.inPokemons(pokemonAdding)){
      alert("Pokemon already in pokemonList")
      throw new Error("Pokemon already in pokemonlist")
    }
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })
    this._loading = true;
    return this.http.patch<Trainer>(`${apiTrainers}/${trainer.id}`, {
      pokemon: [...trainer.pokemon, pokemon]
    }, {
      headers
    })
    .pipe(
      tap((updatedTrainer: Trainer) =>{
        console.log("FIRST TRAINER")
        console.log(this.trainerService.trainer)
        console.log("SECOND TRAINER")
        console.log(updatedTrainer)
        this.trainerService.trainer = updatedTrainer;
      }),
      finalize(() => {
        this._loading = false
      })
    )
  }
}
