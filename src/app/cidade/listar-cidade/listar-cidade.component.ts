import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = [];
  private service:CidadeService;

  constructor() { 
    this.service = new CidadeService();
  }

  ngOnInit(): void {
    this.cidades = this.listarTodos()
  }

  listarTodos():Cidade[] {
    return this.service.listarTodos()
  }

  remover($event:any, cidade:Cidade) : void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover ${cidade.nome} ?`)){
      this.service.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }

}
