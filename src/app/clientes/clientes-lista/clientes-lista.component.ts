import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: any;

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(){
    this.buscarClienteLista();
  }

  buscarClienteLista() {
    this.clienteService.buscarClienteLista().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => 
          ({ key: c.payload.doc.id, ...c.payload.doc.data()})
          )
          )
    ).subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  deletarClientes() {
    this.clienteService.deletarTodos();
  }

}
