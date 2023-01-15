import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private httpClient : HttpClient) { }

  getHeroes () : Observable<Hero[]>{
    // const heroes=of(HEROES);
    const heroes = this.httpClient.get<Hero[]>('http://localhost:5500/')
    console.log(heroes);
    this.messageService.add("The HeroService Fetched the heroes !")
    return heroes;
  }
  getHero (id:number): Observable<Hero>{
    const hero=HEROES.find(h=>h.id==id)!;
    this.messageService.add(`You choosed number ${id} Hero`);
    return of(hero);
  }

}