import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllenatoriService } from 'src/app/services/allenatori.service';


@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],
  providers: [AllenatoriService]
})

export class RegistrazioneComponent {
  urlAllenatori:string="http://localhost:3000/allenatori";

  constructor(private allenatoriService: AllenatoriService) {}

  onSubmit(form: NgForm){
    console.log(form.value)
    console.log(this.allenatoriService)

    this.allenatoriService.allenatoriGet(this.urlAllenatori)
      .subscribe((data: any) => {data; console.log(data);

        data.filter((element:any) => {
          element.username;
          console.log(element.username)
          if(form.value.username!=element.username && form.value.email!=element.email) {
            form.value.id = data.length
            this.allenatoriService.allenatoriPost(this.urlAllenatori,
              {
                id: form.value.id,
                username: form.value.username,
                dataDiNascita: form.value.data,
                email: form.value.email,
                password: form.value.password
              })
              .subscribe((response : any)=>{
                console.log("Registrato con successo" + response.value);
              })
          } else {
            alert('Username o Email già esistenti')
          }
        })
      });
  }


}
