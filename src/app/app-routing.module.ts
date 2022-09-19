import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';

import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';

import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';

//Usar pathMatch: 'full' quando teste path vazio
const routes: Routes = [
  {path: '', redirectTo: 'pessoas/listar', pathMatch: 'full'},
  {path: 'pessoas', redirectTo: 'pessoas/listar'},
  {path: 'pessoas/listar', component: ListarPessoaComponent},
  {path: 'pessoas/novo', component: InserirPessoaComponent},
  {path: 'pessoas/editar/:id', component: EditarPessoaComponent},
  {path: 'enderecos', redirectTo: 'enderecos/listar'},
  {path: 'enderecos/listar', component: ListarEnderecoComponent},
  {path: 'enderecos/novo', component: InserirEnderecoComponent},
  {path: 'enderecos/editar/:id', component: EditarEnderecoComponent},
  {path: 'cidades', redirectTo: 'cidades/listar'},
  {path: 'cidades/listar', component: ListarCidadeComponent},
  {path: 'cidades/novo', component: InserirCidadeComponent},
  {path: 'cidades/editar/:id', component: EditarCidadeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
