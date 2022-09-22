import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';

const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodos() : Estado[] {
    const estados = localStorage[LS_CHAVE];
    console.log(estados)
    return estados ? JSON.parse(estados) : [];
  }

  BuscarPorId(id:number):Estado | undefined {
    return this.listarTodos().find(estado => estado.id == id);
  }

  inserir(estado:Estado) : void {
    estado.id = new Date().getTime();
    let estados = this.listarTodos()
    estados.push(estado)
    localStorage[LS_CHAVE] =  JSON.stringify(estados);
  }

  atualizar(estado:Estado) : void {
    let estados = this.listarTodos();
    estados.forEach(
      (obj,index,objs) => {
        if (obj.id == estado.id)
          objs[index] = estado
      }
    )
    localStorage[LS_CHAVE] = JSON.stringify(estados)
  }

  remover(id:number): void {
    let estados = this.listarTodos().filter(estado => estado.id != id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

}
