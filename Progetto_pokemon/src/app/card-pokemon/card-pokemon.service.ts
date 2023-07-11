import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardPokemonService {

  constructor(private http: HttpClient) { }

  fetchGet(){
    this.http.get("https://pokeapi.co/api/v2/pokemon")
  }
}
