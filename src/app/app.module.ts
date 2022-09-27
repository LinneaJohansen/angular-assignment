import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TrainerFormComponent } from './components/trainer-form/trainer-form.component';
import { CatalogueFormComponent } from './components/catalogue-form/catalogue-form.component';
import { PokemonListComponent } from 'src/app/components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    CataloguePage,
    LoginFormComponent,
    TrainerFormComponent,
    CatalogueFormComponent,
    PokemonListComponent,
    PokemonListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
