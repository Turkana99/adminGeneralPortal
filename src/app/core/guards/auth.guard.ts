import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {} // Inject authService and Router

  canActivate() {
    // Implement the canActivate() method required by the CanActivate interface. This method returns a boolean or a promise/observable that resolves to a boolean. It determines if a route can be activated or not.
    if (this.authService.userInfo) { // Check if the user is authenticated by accessing the userInfo property of the AuthService.
      this.router.navigate(['/projects']); // If the user is authenticated (userInfo is not null), redirect the user to the main page ('/main') and return false to prevent activation of the guarded route.
      return false;
    } else {
      return true; // If the user is not authenticated (userInfo is null), allow activation of the guarded route by returning true.
    }
  }
}
