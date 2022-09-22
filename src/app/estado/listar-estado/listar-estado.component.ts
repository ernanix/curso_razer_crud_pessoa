import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';
@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {
  estados: Estado[] = []

  constructor(
    private service:EstadoService
  ) { }

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos():Estado[] {
    return this.service.listarTodos();
  }

  remover($event:any, estado:Estado): void {
    $event.preventDefault();
    if(confirm(`Deseja mesmo remover ${estado.nome} ?`)) {
      this.service.remover(estado.id!);
      this.estados = this.listarTodos();
    }
  }
}
