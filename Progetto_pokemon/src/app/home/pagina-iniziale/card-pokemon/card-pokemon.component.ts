
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
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
  urlAllenatori: string ="http://localhost:3000/allenatori"
  arrayPokemon:any;
  utenteLoggato:any;
  mostraListaPokemonSelezionati: boolean=false;
  arrayPokemonSelezionati: any[]=[];
  mostraMessaggioSalva: boolean=false;
  disabilitaBottone:boolean=false;

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



  //UNICA SOLUZIONE PER L'INIVIO DEI POKEMON AL ROOSTER E' IL PUT
  //ANDANDO A MODIFICARE L'INTERA CLASSE DELL'ALLENATORE
  putPokemon(url: string, body: {}):any{
    return this.http.put(url, body)
  }


  aggiungiPokemonAlRooster(){
    this.utenteLoggato=this.authenticationService.getAuthentication();
    console.log(this.utenteLoggato)
    this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
      .subscribe((data:any)=>{console.log(JSON.stringify(data[0].rooster));
        console.log(data)
        for(let i=0; i < data.length; i++) {
          if (this.utenteLoggato.username == data[i].username){
            data[i].rooster.push(...this.arrayPokemonSelezionati)

            //console.log(data[i].rooster)
            //console.log(data)
            //console.log(data[i].rooster.length)
            if (data[i].rooster.length < 7) {
              this.putPokemon(this.urlAllenatoriRooster+[i], data[i])
              .subscribe((response:any)=> {console.log(response)});

              this.mostraMessaggioSalva=true;
              this.arrayPokemonSelezionati.splice(6)
              console.log(this.arrayPokemonSelezionati)
              this.mostraListaPokemonSelezionati=false;
            } else {
                alert("Elimina qualche pokemon dal rooster per poterne aggiungere di nuovi")
            }

        }
        }
      }
      )
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
