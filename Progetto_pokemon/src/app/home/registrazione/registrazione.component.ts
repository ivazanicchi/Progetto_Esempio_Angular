import { Component, Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})

export class RegistrazioneComponent {
  mostraRegistrazione:boolean=false;

}
