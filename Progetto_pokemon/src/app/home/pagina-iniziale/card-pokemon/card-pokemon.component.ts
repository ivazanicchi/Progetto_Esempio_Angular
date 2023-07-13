
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit{
  urlPokemon:string="http://localhost:3000/pokemon";
  arrayPokemon:any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.urlPokemon).subscribe(data =>{
      this.arrayPokemon=data;
      console.log(data)});
  }

  mostraListaPokemon(){


  }




}
