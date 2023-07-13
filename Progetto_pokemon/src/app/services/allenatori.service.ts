import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable({providedIn:'root'})

export class AllenatoriService implements OnInit{


  constructor(private http: HttpClient){}


  ngOnInit(): void {}

  allenatoriGet(url: string){
    return this.http.get(url)
  }

  allenatoriPost(url: string, body: {}){
    return this.http.post(url,body)
  }
}
