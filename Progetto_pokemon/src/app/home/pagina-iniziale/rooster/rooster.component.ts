import { Component, OnInit } from '@angular/core';
import { AllenatoriService } from 'src/app/services/allenatori.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CardPokemonComponent } from '../card-pokemon/card-pokemon.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooster',
  templateUrl: './rooster.component.html',
  styleUrls: ['./rooster.component.css']
})
export class RoosterComponent implements OnInit{
  utenteLoggato:any;
  arrayPokemonRooster:any;
  urlAllenatoriRooster: string ="http://localhost:3000/allenatori/"


  constructor(private authenticationService: AuthenticationService,
              private allenatoriService: AllenatoriService,
              private cardPokemonComponent: CardPokemonComponent,
              private http: HttpClient) {}


  ngOnInit(): void {
    this.utenteLoggato=this.authenticationService.getAuthentication();
    //console.log(this.utenteLoggato)
    this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
      .subscribe((data:any)=>{console.log(JSON.stringify(data[0].rooster));
        console.log(data)
        for(let i=0; i < data.length; i++) {
          if (this.utenteLoggato.username == data[i].username){
            this.arrayPokemonRooster=data[i].rooster
          }
        }
      })
  }



  putPokemon(url: string, body: {}):any{
    return this.http.put(url, body)
  }


  eliminaPokemonSelezionato(pokemon: any){
    const idx=this.arrayPokemonRooster.indexOf(pokemon)
    this.arrayPokemonRooster.splice(idx,1)
    this.utenteLoggato=this.authenticationService.getAuthentication();
    console.log(this.utenteLoggato)
    this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
      .subscribe((data:any)=>{console.log(JSON.stringify(data[0].rooster));
        console.log(data)
        for(let i=0; i < data.length; i++) {
          if (this.utenteLoggato.username == data[i].username){
            data[i].rooster=this.arrayPokemonRooster
            this.putPokemon(this.urlAllenatoriRooster+[i], data[i])
            .subscribe((response:any)=> {console.log(response)});
            console.log(data[i])
          }
        }
      }
      )
    return this.arrayPokemonRooster
  }

}
