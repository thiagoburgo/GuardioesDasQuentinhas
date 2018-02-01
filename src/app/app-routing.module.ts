import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GestaoContaComponent } from './account/gestao-conta/gestao-conta.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'account/login', component: LoginComponent },
  {path: 'account/gestao', component: GestaoContaComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
      enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
