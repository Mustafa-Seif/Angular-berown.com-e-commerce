import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../auth/components/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class CanDactivateGuard implements CanDeactivate<unknown> {
  constructor(private route: Router) {}
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
   return component.canDeactivateMethod()
  }
}
