import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EstadoService } from './services/estado.service';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    EstadoService
  ]
})
export class EstadoModule { }
