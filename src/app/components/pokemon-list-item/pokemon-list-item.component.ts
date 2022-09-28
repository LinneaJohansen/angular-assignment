import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  @Input() pokemon?: Pokemon;

  constructor(private readonly trainerService: TrainerService) { }

  ngOnInit(): void {
  }

  public collectPokemon(newPokemon: Pokemon): void {
    let trainer: Trainer | undefined = this.trainerService.trainer;
    if (trainer != undefined) {
      trainer.pokemon.push(newPokemon);
      alert(newPokemon.name + " was caught");
    }
  }
}