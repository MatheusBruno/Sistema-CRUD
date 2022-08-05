import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginFormService } from '../service/login-form.service';
import { Router } from '@angular/router';

@Injectable()
export class Authlogin implements CanActivate {

  constructor(private serverlogin : LoginFormService, private url : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    if(this.serverlogin.submitlogin){
      return true;
    }

    alert('Faça o login!');
    this.url.navigate(['/login']);
    return false;
  }

}
