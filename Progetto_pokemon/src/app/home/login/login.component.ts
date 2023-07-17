import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AllenatoriService } from 'src/app/services/allenatori.service';
import { HeaderComponent } from 'src/app/header/header.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HomeComponent } from '../home.component';

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
  username?:string;

  constructor(private allenatoriService: AllenatoriService,
              private router: Router,
              private headerComponent: HeaderComponent,
              private authenticationService: AuthenticationService,
              private homeComponent: HomeComponent){}

              /*onLogin(): void {
                if (this.username) {
                  this.authenticationService.login(this.username)
                    .subscribe(
                      () => {
                        alert(`Benvenuto ${this.username}`);
                        this.router.navigate(['/pagina-iniziale']);
                      },
                      err => alert(`Accesso non riuscito: ${err}`)
                    );
                } else {
                    alert('Inserisci un nome ...');
                }
              }*/

              onLogin(form: NgForm) {
                console.log(form)
                console.log(form.value)

                this.allenatoriService.allenatoriGet("http://localhost:3000/allenatori")
                  .subscribe((data:any) => { this.arrayAllenatori = data;
                    console.log(this.arrayAllenatori);

                    for(let i=0; i < data.length; i++) {
                      if (data[i].username == form.value.username && data[i].password == form.value.password){
                        this.authenticationService.login(form.value.username)
                        this.usernameLogin=form.value.username;
                        alert(`Benvenuto ${this.usernameLogin}`)
                        this.router.navigate(['/pagina-iniziale']);
                      } else {
                        this.errorMessage=true;
                      }
                    }
                    form.reset();
                  })}



  /*onLogin(form: NgForm) {
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
      });*/


    /*setTimeout(()=>{
      for(let i=0; i < this.arrayAllenatori.length; i++) {
        if (this.arrayAllenatori[i].value.username === form.value.username){
          alert('è uguale')
        }
      }
    },1000)
  }*/
}
