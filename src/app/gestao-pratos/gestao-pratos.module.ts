import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPorcaoComponent } from './cadastro-porcao/cadastro-porcao.component';
import { ListagemPorcaoComponent } from './listagem-porcao/listagem-porcao.component';
import { ListagemLojaComponent } from './listagem-loja/listagem-loja.component';
import { MontagemPratoComponent } from './montagem-prato/montagem-prato.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CadastroPorcaoComponent, ListagemPorcaoComponent, ListagemLojaComponent, MontagemPratoComponent]
})
export class GestaoPratosModule { }
