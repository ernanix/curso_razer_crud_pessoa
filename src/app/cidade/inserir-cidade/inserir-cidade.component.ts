import { Component, OnInit, ViewChild } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css']
})
export class InserirCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade

  constructor(
    private service:CidadeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.cidade = new Cidade()
  }

  inserir() : void {
    if (this.formCidade.form.valid) {
      this.service.inserir(this.cidade)
      this.router.navigate(['/cidades'])
    }
  }

}
