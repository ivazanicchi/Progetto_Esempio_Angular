import { Component, Injectable, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/model/authetication.model';

export const ACCESS_TOKEN = 'demo-access-store';

@Injectable({providedIn:'root'})

@Component({
  selector: 'app-pagina-iniziale',
  templateUrl: './pagina-iniziale.component.html',
  styleUrls: ['./pagina-iniziale.component.css']
})
export class PaginaInizialeComponent implements OnInit{
  user?: string;
  mostraCard:boolean=false;
  mostraRooster:boolean=false;

  private authentication?: Authentication

  constructor(public loginComponent: LoginComponent,
              private headerComponent: HeaderComponent,
              private authenticationService: AuthenticationService,
              private router: Router){}

  ngOnInit(): void {
    this.user=this.authenticationService.getAuthentication()?.username
  }


  onMostraCardPokemon(){
    this.mostraCard=true;
    this.mostraRooster=false;
  }

  onMostraRooster(){
    this.mostraRooster=true;
    this.mostraCard=false;
  }

  logOut(){
    this.authenticationService.logout()
    .subscribe(()=>alert("Hai effettuato il logout"))
    this.router.navigate(["/"])
  }



}
