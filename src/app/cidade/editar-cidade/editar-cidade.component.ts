import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm
  cidade!: Cidade;

  constructor(
    private service:CidadeService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    const res = this.service.buscarPorId(id);
    if (res !== undefined) {
      this.cidade = res
    } else {
      throw new Error("Cidade não encontrada! id ="+id)
    }
  }
  
  atualizar() : void {
    if (this.formCidade.form.valid) {
      this.service.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
  

}
