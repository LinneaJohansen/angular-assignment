import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  public isCollected:Boolean = false;

  constructor(private readonly trainerService: TrainerService) { }

  ngOnInit(): void {
  }

  public collectPokemon(): void {
    let trainer: Trainer | undefined = this.trainerService.trainer;
    if (trainer != undefined && this.pokemon != undefined && this.isCollected == false) {
      trainer.pokemon.push(this.pokemon);
      this.isCollected = true;
    }
  }
}