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


  //Get method for trainer
  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  //Set trainer
  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  public findIdOfPokemon(): string[] {
    this._loading = true;
    for(let p of this._pokemons){

      this.http.get<Pokemon>(apiPokemons + "/" + p)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemon: Pokemon) => {
          this._pokemon = pokemon;
          let myUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + `${pokemon.id}` +".png"
          this._imgUrl.push(myUrl)
        },
        error: () => {
          
        }
      })
    }
    return this._imgUrl;

    }

    /*
  get imgUrls(): number[]{
    return this._imgUrl;
  } */

  constructor(private readonly http: HttpClient) { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);

  }
}
