import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
  })
  export class SecureInnerPagesGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedIn) {
        window.alert('Access denied!');
        this.router.navigate(['user-profile']);
      }
      return true;
    }
  }