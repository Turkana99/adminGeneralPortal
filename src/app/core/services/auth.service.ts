import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: UserInterface | null = null;

  constructor(private router: Router) {
    this._restore();
  }

  // Getter method to retrieve the user information
  private get user(): UserInterface | null {
    return this._user;
  }

  // Setter method to update the user information and store it in local storage
  private set user(value: UserInterface | null) {
    this._user = value;

    // If user data is provided, store it in local storage, otherwise clear local storage
    if (value) {
      localStorage.setItem('user', JSON.stringify(value));
    } else {
      localStorage.removeItem('user');
    }
  }

  // Method to return a shallow copy of the user information
  public get userInfo(): UserInterface | null {
    return this._user ? { ...this._user } : null;
  }

  // Method to handle user login
  public login(username: string, password: string) {
    // For demonstration purposes, set user data to a mock user object
    // In a real application, this would be replaced with authentication logic
    this.user = {
      id: 1,
      email: username,
      password,
    };

    // Redirect the user to the main page after login
    this.router.navigate(['/projects']);
  }

  // Method to handle user registration
  public register(username: string, password: string) {
    // For demonstration purposes, set user data to a mock user object
    // In a real application, this would be replaced with registration logic
    this.user = {
      id: 2,
      email: username,
      password,
    };

    // Redirect the user to the main page after registration
    this.router.navigate(['/projects']);
  }

  // Method to handle user logout
  public logout() {
    // Clear user data and redirect the user to the login page
    this.user = null;
    this.router.navigate(['/login']);
  }

  // Method to restore user data from local storage when AuthService is initialized
  private _restore() {
    // Retrieve user data from local storage and parse it as JSON
    const userData = localStorage.getItem('user');
    this._user = userData ? JSON.parse(userData) : null;
  }
}
