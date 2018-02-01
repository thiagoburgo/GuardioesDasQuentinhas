import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoContaComponent } from './gestao-conta/gestao-conta.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    GestaoContaComponent
  ],
  exports: [
    LoginComponent,
    GestaoContaComponent
  ]
})
export class AccountModule { }
