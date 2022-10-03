import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate {

  private isAuthenticated: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/');

      return false;
    }
  }
}
