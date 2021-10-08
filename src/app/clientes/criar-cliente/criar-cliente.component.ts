import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  enviar = false;


  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }

  novoCliente(): void {
    this.enviar = false;
    this.cliente = new Cliente();
  }

  salvar() {
    this.clienteService.criarCliente(this.cliente);
    this.cliente = new Cliente();
  }

  aoEnviar() {
    this.enviar = true;
    this.salvar;
  }

}
