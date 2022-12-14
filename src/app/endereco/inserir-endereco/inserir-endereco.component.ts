import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})
export class InserirEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;

  constructor(
    private service: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.endereco = new Endereco();
  }

  inserir(): void {
    if (this.formEndereco.valid) {
      this.service.inserir(this.endereco);
      this.router.navigate(["/enderecos"]);
    }
  }



}
