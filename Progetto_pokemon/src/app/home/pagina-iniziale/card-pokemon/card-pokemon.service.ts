import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardPokemonComponent } from './card-pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class CardPokemonService {

  constructor(private http: HttpClient, private cardPokemonComponent: CardPokemonComponent) { }

  getPokemon(){
    this.http.get("http://localhost:3000/pokemon").subscribe(posts=>{console.log(posts)})
  }

  postPokemon(){
    //this.http.post("")
  }
  
}
