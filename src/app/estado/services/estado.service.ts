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
    return estados ? JSON.parse(estados) : [];
  }

  BuscarPorId(id:number):Estado | undefined {
    return this.listarTodos().find(estado => estado.id == id);
  }

  inserir(estado:Estado) : void {
    estado.id = new Date().getTime();
    localStorage[LS_CHAVE] =  JSON.stringify(this.listarTodos().push(estado));
  }

  atualizar(estado:Estado) : void {
    localStorage[LS_CHAVE] = JSON.stringify(this.listarTodos().forEach(
      (obj,index,objs) => {
        if (obj.id == estado.id)
          objs[index] = estado
      }
    ))
  }

  remover(id:number): void {
    localStorage[LS_CHAVE] = JSON.stringify(this.listarTodos().filter(estado => estado.id != id));
  }

}
