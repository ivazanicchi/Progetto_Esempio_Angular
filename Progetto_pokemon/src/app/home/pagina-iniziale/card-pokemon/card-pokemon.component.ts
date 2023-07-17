
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllenatoriService } from 'src/app/services/allenatori.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit{
  urlPokemon:string="http://localhost:3000/pokemon";
  arrayPokemon:any;
  utenteLoggato:any;

  constructor(private http: HttpClient,
              private allenatoriService: AllenatoriService,
              private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.http.get(this.urlPokemon).subscribe(data =>{
      this.arrayPokemon=data;
      console.log(data)});
  }

  aggiungiPokemon(pokemon:any){
    console.log(pokemon)
    this.utenteLoggato=this.authenticationService.getAuthentication();
    console.log(this.utenteLoggato.username)

    this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
      .subscribe((data:any)=>{console.log(data);
        for(let i=0; i < data.length; i++) {
          if (this.utenteLoggato.username == data[i].username){
            this.allenatoriService.allenatoriPost("http://localhost:3000/allenatori/"+[i], pokemon)
            .subscribe((response:any)=> {console.log(response);
              response[i].rooster.push(pokemon)
              console.log(response[i].rooster)})
          }
        }

        /*this.allenatoriService.allenatoriPost("http://localhost:3000/allenatori", pokemon)
        .subscribe((response:any)=> {console.log(response);
          console.log(response[0].rooster)})*/
        })
  }

  //1. OTTENERE CHI E LOGGATO
  //2. OTTENERE I DATI DEL POKEMON SELEZIONATO
  //3. POST SUL ROOSTER DELL'UTENTE LOGGATO


}
