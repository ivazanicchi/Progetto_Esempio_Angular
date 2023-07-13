import { Component, Injectable } from '@angular/core';
import { HomeComponent } from '../home.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AllenatoriService } from 'src/app/services/allenatori.service';

@Injectable({providedIn:'root'})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  arrayAllenatori:any[]=[]
  errorMessage: boolean=false;
  usernameLogin:string="Username";

  constructor(private allenatoriService: AllenatoriService, private router: Router){}

  onLogin(form: NgForm) {
    console.log(form)
    console.log(form.value)

    this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
      .subscribe((data:any) => { this.arrayAllenatori = data;
        //console.log(data[0].username);
        for(let i=0; i < data.length; i++) {
          if (data[i].username === form.value.username && data[i].password === form.value.password){

            this.usernameLogin=form.value.username;
            alert(`Benvenuto ${this.usernameLogin}`)
            this.router.navigate(['/pagina-iniziale'])
            //Aggiungere messaggio di benvenuto

          } else {
            this.errorMessage=true;
            form.reset()
          }
        }
      });

    /*setTimeout(()=>{
      for(let i=0; i < this.arrayAllenatori.length; i++) {
        if (this.arrayAllenatori[i].value.username === form.value.username){
          alert('è uguale')
        }
      }
    },1000)*/








  }
}
