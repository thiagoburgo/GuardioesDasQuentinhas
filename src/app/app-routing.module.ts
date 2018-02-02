import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GestaoContaComponent } from './account/gestao-conta/gestao-conta.component';
import { ListagemLojaComponent } from './gestao-pratos/listagem-loja/listagem-loja.component';
import { GestaoPratosModule } from './gestao-pratos/gestao-pratos.module';
import { DetalhesLojaComponent } from './gestao-pratos/detalhes-loja/detalhes-loja.component';
import { PermissionGuard } from './permission.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'gestao', children: [
    {path: 'lojas', component: ListagemLojaComponent},
    {
      path: 'lojas/:id',
      component: DetalhesLojaComponent,
      data: {
        permissions: ['permissao1', 'permissao2']
      },
      canActivate: [PermissionGuard]
    }
  ]},
  {path: 'account/login', component: LoginComponent },
  {path: 'account/gestao', component: GestaoContaComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
      enableTracing: false
    }),
  GestaoPratosModule],
  exports: [RouterModule],
  providers: [PermissionGuard]
})
export class AppRoutingModule { }
