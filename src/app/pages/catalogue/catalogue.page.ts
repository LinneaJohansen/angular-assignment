import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css']
})
export class CataloguePage implements OnInit {

  get pokemons(): Pokemon[] {
    return this.catalogueService.pokemons;
  }

  get loading(): boolean {
    return this.catalogueService.loading;
  }

  get error(): string {
    return this.catalogueService.error;
  }

  constructor(
    private readonly catalogueService: CatalogueService
  ) { }

  ngOnInit(): void {
    this.catalogueService.findAllPokemons();
  }

}
