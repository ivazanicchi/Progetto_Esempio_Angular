
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllenatoriService } from 'src/app/services/allenatori.service';
@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit{
  urlPokemon:string="http://localhost:3000/pokemon";
  arrayPokemon:any;

  constructor(private http: HttpClient,
              private allenatoriService: AllenatoriService) {}

  ngOnInit(): void {
    this.http.get(this.urlPokemon).subscribe(data =>{
      this.arrayPokemon=data;
      console.log(data)});
  }

  aggiungiPokemon(pokemon:any){
    console.log(pokemon)
    this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
      .subscribe((data:any)=>{console.log(data);console.log(data.rooster);
        this.allenatoriService.allenatoriPost("http://localhost:3000/allenatori/0", pokemon)
        .subscribe((response:any)=> {console.log(response);
          console.log(response[0].rooster)})})
          
  }




}
