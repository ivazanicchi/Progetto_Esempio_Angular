import { Component } from '@angular/core';
import { RegistrazioneComponent } from '../registrazione/registrazione.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mostraLogin:boolean=true;

  constructor(private registrazioneComponente: RegistrazioneComponent){}

  onMostraRegistrazione(){
    this.mostraLogin=false;
    this.registrazioneComponente.mostraRegistrazione=true;
  }
}
