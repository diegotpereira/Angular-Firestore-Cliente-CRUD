import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarClienteComponent } from './clientes/criar-cliente/criar-cliente.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'clientes', pathMatch: 'full'
  },
  {
    path: 'clientes', component: ClientesListaComponent
  },
  {
    path: 'add', component: CriarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
