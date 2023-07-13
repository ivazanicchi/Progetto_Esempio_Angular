import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegistrazioneComponent } from './home/registrazione/registrazione.component';
import { CardPokemonComponent } from './home/pagina-iniziale/card-pokemon/card-pokemon.component';
import { PaginaInizialeComponent } from './home/pagina-iniziale/pagina-iniziale.component';
import { RoosterComponent } from './home/pagina-iniziale/rooster/rooster.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'pagina-iniziale', component: PaginaInizialeComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'card-pokemon', component: CardPokemonComponent},
  {path: 'rooster', component: RoosterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
