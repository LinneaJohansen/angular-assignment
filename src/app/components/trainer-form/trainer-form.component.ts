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
  
  constructor(
    private readonly trainerService: TrainerService) { }
    public trainerPokemons = this.trainerService.trainer?.pokemon;
    public apiU = apiPokemons + "/" +`${this.trainerPokemons![0]}`;
    public imgIds: string[] = [];

  ngOnInit(): void {
    this.imgIds = this.trainerService.findIdOfPokemon();
    console.log(this.imgIds)
  }


}
