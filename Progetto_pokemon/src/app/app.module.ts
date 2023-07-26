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
import { CardPokemonComponent } from './home/pagina-iniziale/card-pokemon/card-pokemon.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginaInizialeComponent } from './home/pagina-iniziale/pagina-iniziale.component';
import { RoosterComponent } from './home/pagina-iniziale/rooster/rooster.component';
import { aggiungiPokemon } from './store/card-pokemon.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegistrazioneComponent,
    CardPokemonComponent,
    PaginaInizialeComponent,
    RoosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      aggiungi: aggiungiPokemon,
    }),
    CommonModule,
    ButtonModule,
    PasswordModule,
    DividerModule,
    CardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
