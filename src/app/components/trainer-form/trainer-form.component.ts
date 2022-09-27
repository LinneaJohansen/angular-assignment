import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { StorageUtil } from 'src/app/utils/storage.utils';
import { TrainerService } from 'src/app/services/trainer.service';
import { environment } from 'src/environments/environment';

const {apiPokemons} = environment;

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {

  public trainerPokemons = this.trainerService.trainer?.pokemon;
 // public imgUrls: string[] = [];
  public imgUrls = this.trainerService.findIdOfPokemon()
  public setOfPokemons: Object[] = [];

  public addNameAndUrl(){
    console.log("we started")
    for(let p of this.imgUrls){
      console.log(p)
    }
    for(let i = 0; i < this.trainerPokemons!.length; i++){
      
      this.setOfPokemons.push({name: this.trainerPokemons![i], url: this.imgUrls[i]})
      
    }
    console.log(this.trainerPokemons)
    console.log(this.imgUrls)
    console.log(this.setOfPokemons);
  }

 
  
  constructor(
    private readonly trainerService: TrainerService) { }

  ngOnInit(): void {
    this.addNameAndUrl();
  }


}
