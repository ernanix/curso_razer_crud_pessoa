import { Component, OnInit,ViewChild } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})
export class InserirEstadoComponent implements OnInit {
  @ViewChild("formEstado") formEstado!: NgForm;
  estado!: Estado;

  constructor(
    private service:EstadoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.estado = new Estado();
  }

  inserir():void{
    this.estado.id = new Date().getTime();
    if (this.formEstado.form.valid) {
      this.service.inserir(this.estado);
      this.router.navigate(['/estados'])
    }
  }

}
