
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CardPokemonService } from './card-pokemon.service';
import { ListaPokemon } from './card-pokemon.model';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {

  constructor(private cardPokemonService: CardPokemonService, private http: HttpClient, private listaPokemon: ListaPokemon) {}

  mostraListaPokemon(){
    this.cardPokemonService.fetchGet().subscribe((data: ListaPokemon) => this.listaPokemon = {name: data.name})
  }

}
