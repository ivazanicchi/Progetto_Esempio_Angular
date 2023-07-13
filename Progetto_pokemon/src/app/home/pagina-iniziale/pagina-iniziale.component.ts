import { Component, Injectable, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({providedIn:'root'})

@Component({
  selector: 'app-pagina-iniziale',
  templateUrl: './pagina-iniziale.component.html',
  styleUrls: ['./pagina-iniziale.component.css']
})
export class PaginaInizialeComponent {

  constructor(public loginComponent: LoginComponent){}






}
