
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Allenatore } from 'src/app/classes/Allenatore';
import { AllenatoriService } from 'src/app/services/allenatori.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({providedIn:'root'})

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit{
  urlPokemon:string="http://localhost:3000/pokemon";
  urlAllenatoriRooster: string ="http://localhost:3000/allenatori/"
  arrayPokemon:any;
  utenteLoggato:any;
  mostraListaPokemonSelezionati: boolean=false;
  arrayPokemonSelezionati: any[]=[];

  constructor(private http: HttpClient,
              private allenatoriService: AllenatoriService,
              private authenticationService: AuthenticationService,) {}

  ngOnInit(): void {
    this.http.get(this.urlPokemon).subscribe(data =>{
      this.arrayPokemon=data;
      console.log(data)});
  }

  onMostraPokemonSelezionati(){
    this.mostraListaPokemonSelezionati=true;
  }

  aggiungiPokemon(pokemon:any): any {
    if(this.arrayPokemonSelezionati.length<6){
      this.mostraListaPokemonSelezionati=true;
      this.arrayPokemonSelezionati.push(pokemon)
      console.log(this.arrayPokemonSelezionati)
      return this.arrayPokemonSelezionati
    } else {
      alert("Hai raggiunto il limite massimo di pokemon da selezionare")
    }
  }

  eliminaPokemonSelezionato(pokemon: any){
    const idx=this.arrayPokemonSelezionati.indexOf(pokemon)
    this.arrayPokemonSelezionati.splice(idx,1)

    if(this.arrayPokemonSelezionati.length==0) {
      this.mostraListaPokemonSelezionati=false;
    }
    
    return this.arrayPokemonSelezionati
  }

  /*
  aggiungiPokemon(pokemon:any){
    console.log(pokemon)
    this.utenteLoggato=this.authenticationService.getAuthentication();
    console.log(this.utenteLoggato.username)

    this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
      .subscribe((data:any)=>{console.log(JSON.stringify(data[0].rooster));
        console.log(data)
        for(let i=0; i < data.length; i++) {
          if (this.utenteLoggato.username == data[i].username){
            this.allenatoriService.pokemonPut(this.urlAllenatoriRooster+[i]+"/rooster", pokemon)
            .subscribe((response:any)=> {console.log(response);
              //response[i].rooster.push(pokemon)
              //console.log(response[i].rooster)
            })
          }
        }
  }*/

  //1. OTTENERE CHI E LOGGATO
  //2. OTTENERE I DATI DEL POKEMON SELEZIONATO
  //3. POST SUL ROOSTER DELL'UTENTE LOGGATO



}
