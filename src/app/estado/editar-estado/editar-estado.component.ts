import { Component, OnInit,ViewChild } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';

import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {
  @ViewChild("formEstado") formEstado!: NgForm;
  estado!: Estado;

  constructor(
    private service:EstadoService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log(id)
    const res = this.service.BuscarPorId(id);
    console.log(JSON.stringify(res))
    if (res !== undefined) {
      this.estado = res
    } else {
      throw new Error ("Estado não encontrado! Id="+id)
    }
  }

  atualizar(): void {
    this.service.atualizar(this.estado);
    this.router.navigate(['/estados'])
  }

}
