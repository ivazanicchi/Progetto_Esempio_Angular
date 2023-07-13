import { Component, Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable({providedIn:'root'})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostraLogin:boolean=true;
  mostraRegistrazione:boolean=false;

  constructor(private appComponent: AppComponent){}



}
