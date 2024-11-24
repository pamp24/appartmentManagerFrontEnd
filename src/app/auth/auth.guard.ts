import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class UserToken {}

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(){}

    canActivate(
        // route: ActivatedRouteSnapshot,
        // state: RouterStateSnapshot
    ): boolean {
        // | Promise<boolean> 
        // | Observable<boolean> {
         return true ;
        };
}
