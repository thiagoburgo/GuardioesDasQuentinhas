import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PermissionGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('State: ', state);
    console.log('ActivatedRoute: ', next);
    const permissions = <string[]>next.data.permissions;
    const permissaoUsuarioAtual = 'permissao1'; // viria do usuario logado

    return permissions.indexOf(permissaoUsuarioAtual) > -1;
  }
}
