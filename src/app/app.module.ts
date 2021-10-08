import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { ClienteDetalhesComponent } from './clientes/cliente-detalhes/cliente-detalhes.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { CriarClienteComponent } from './clientes/criar-cliente/criar-cliente.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ClienteDetalhesComponent,
    ClientesListaComponent,
    CriarClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
