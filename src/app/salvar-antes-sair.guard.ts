import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';
import { DetalhesLojaComponent } from './gestao-pratos/detalhes-loja/detalhes-loja.component';
import { ConfirmarSairSemSalvar } from './shared/ConfirmarSairSemSalvar';

@Injectable()
export class SalvarAntesSairGuard implements CanDeactivate<ConfirmarSairSemSalvar> {
  canDeactivate(component: ConfirmarSairSemSalvar,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    return component.checaSairSemSalvar();
  }
}
