import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPorcaoComponent } from './cadastro-porcao/cadastro-porcao.component';
import { ListagemPorcaoComponent } from './listagem-porcao/listagem-porcao.component';
import { ListagemLojaComponent } from './listagem-loja/listagem-loja.component';
import { MontagemPratoComponent } from './montagem-prato/montagem-prato.component';
import { DetalhesLojaComponent } from './detalhes-loja/detalhes-loja.component';
import { RouterModule } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CadastroPorcaoComponent,
    ListagemPorcaoComponent,
    ListagemLojaComponent,
    MontagemPratoComponent,
    DetalhesLojaComponent],
  exports: [
    ListagemLojaComponent,
    DetalhesLojaComponent
  ]

})
export class GestaoPratosModule { }
