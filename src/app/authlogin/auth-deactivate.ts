import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { HomeComponent } from './../pages/home/home.component';
import { LoginComponent } from './../pages/login/login.component';
import { LoginFormService } from './../service/login-form.service'


Injectable();
export class AuthDeactivate implements CanDeactivate<HomeComponent> {

    canDeactivate(component: HomeComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined){
        return true;
    }

}
