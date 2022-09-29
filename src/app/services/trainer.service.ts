import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.utils';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { finalize } from 'rxjs';



const { apiPokemons, apiKey } = environment;

//public apiU = apiPokemons + "/" +`${this.trainerPokemons![0]}`;


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer;
  private _pokemons: Pokemon[] = [];
  private _pokemon?: Pokemon;
  private pokemonId?: number | string;
  private _loading: boolean = false;
  public _imgUrl: string[] = []; 
  static trainer: Trainer | undefined;


  //Get method for trainer
  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  //Set trainer
  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }
    //Checking if a pokemon already exists in trainest list of pokemons
    public inPokemons(pokemonSelected: Pokemon): boolean{
      if(this.trainer){
        return Boolean(this.trainer.pokemon.find((pokemon: Pokemon) => pokemon.name === pokemonSelected.name));
      }
      return false;
    }

  constructor(private readonly http: HttpClient) { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
    if(this._trainer != undefined){
      this._pokemons = this._trainer!.pokemon;
    }
  }
}
