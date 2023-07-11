import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './home/login/login.component';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { DividerModule } from "primeng/divider";
import { HomeComponent } from './home/home.component';
import { RegistrazioneComponent } from './home/registrazione/registrazione.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegistrazioneComponent,
    CardPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    CommonModule,
    ButtonModule,
    PasswordModule,
    DividerModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
