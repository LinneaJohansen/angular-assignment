import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { StorageUtil } from 'src/app/utils/storage.utils';
import { TrainerService } from 'src/app/services/trainer.service';
import { Trainer } from 'src/app/models/trainer.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CaughtService } from 'src/app/services/caught.service';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {

  public trainer: Trainer = this.trainerService.trainer!;
  public trainerPokemons: Pokemon[] = this.trainer.pokemon;

    //Function for removing a specific pokemon from trainers list of pokemons
   public  onPokemonRemoveClick(pokemonToRemove: Pokemon){
    let newPokemonList: Pokemon[] = []
    this.trainerPokemons.forEach(pokemon => {
      if(pokemon != pokemonToRemove){
        newPokemonList.push(pokemon);
      }
    })
     this.caughtService.removeFromPokemons(pokemonToRemove)
      .subscribe({
        next: (response: Trainer) => {
          console.log("NEXT", response)
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
      })
      //updating the locally stored pokemons for trainer
      this.trainerPokemons = newPokemonList;
  }

 
  
  constructor(
    private readonly trainerService: TrainerService,
    private readonly caughtService: CaughtService
    ) {
      console.log(this.trainer)
     }

  ngOnInit(): void {
  }


}
