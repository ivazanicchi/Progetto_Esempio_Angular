import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { AutenticazioneComponent } from './header/autenticazione/autenticazione.component';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { DividerModule } from "primeng/divider";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutenticazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    CommonModule,
    ButtonModule,
    PasswordModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
