import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private dbPath = '/clientes';

  clienteRef: AngularFirestoreCollection<Cliente> = null;

  constructor(
    private db: AngularFirestore
  ) { 
    this.clienteRef = db.collection(this.dbPath);
  }

  criarCliente(cliente: Cliente): void {
    this.clienteRef.add({...cliente});
  }

  atualizarCliente(key: string, value: any): Promise<void> {
    return this.clienteRef.doc(key).update(value);
  }

  deletarCliente(key: string): Promise<void> {
    return this.clienteRef.doc(key).delete();
  }

  buscarClienteLista(): AngularFirestoreCollection<Cliente> {
    return this.clienteRef;
  }

  deletarTodos() {
    this.clienteRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error; ', error);
      }
    )
  }
}
