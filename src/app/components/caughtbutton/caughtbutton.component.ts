import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { CaughtService } from 'src/app/services/caught.service';

@Component({
  selector: 'app-caughtbutton',
  templateUrl: './caughtbutton.component.html',
  styleUrls: ['./caughtbutton.component.css']
})
export class CaughtbuttonComponent implements OnInit {

  @Input() pokemonId: string = "";

  get loading(): boolean {
    return this.caughtService.loading;
  }

  constructor(
    private readonly caughtService: CaughtService
  ) { }

  ngOnInit(): void {
  }

  /*
  onCaughtClick(): void {
    this.caughtService.addToCaught(this.pokemonId)
      .subscribe({
        next: (response: Trainer) => {
          console.log("NEXT", response)
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
    })
  }*/
}
