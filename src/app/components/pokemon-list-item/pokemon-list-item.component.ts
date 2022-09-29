
import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { CaughtService } from 'src/app/services/caught.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  @Input() pokemon?: Pokemon;
  public isCollected:Boolean = false;

  constructor(
    private readonly caughtService: CaughtService) { }

  ngOnInit(): void {
  }
  
  //At click function for pokemons adds them to the trainers pokemons
  onPokemonAddClick(): void{
    this.isCollected = true;
    if (this.pokemon != undefined) {
      this.caughtService.addToPokemons(this.pokemon)
      .subscribe({
        next: (response: Trainer) => {
          console.log("NEXT", response)
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
      })
    }
  }
}
