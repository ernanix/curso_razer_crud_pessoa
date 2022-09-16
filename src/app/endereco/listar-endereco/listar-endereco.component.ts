import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})

export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = []

  constructor(private service: EnderecoService) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.service.listarTodos();
  }

  remover($event:any, endereco:Endereco) : void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover ${endereco.rua} ?`)) {
      this.service.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }


}
