import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, switchMap, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';

const { apiTrainers, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Dependency injection
  constructor(private readonly http: HttpClient) { }


  //Models, HTTPClient, Observables, and RxJS operators
  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username)
    .pipe(
      switchMap((trainer: Trainer | undefined) => {
        if(trainer === undefined) {
          //User does not exist
          return this.createTrainer(username)
        }
          return of(trainer)
        })
      )
  }

  //Login


  //Check if user exist
  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`).pipe(
      //RxJS
      map((response: Trainer[])=> response.pop())
    )
  }

  //Create trainer
  private createTrainer(username: string): Observable<Trainer> {
    // User
    const trainer = {
      username,
      pokemon: []
    }
    // Headers -> API key
    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "x-api-key": apiKey
    })
    // POST request
    return this.http.post<Trainer>(apiTrainers, trainer, {headers});
  }

  //If user DO exist || is created, store user, continue

}
