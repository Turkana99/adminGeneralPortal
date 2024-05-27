import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: UserInterface | null = null;

  constructor(private router: Router, private http: HttpClient) {
    this._restore();
  }

  private get user(): UserInterface | null {
    return this._user;
  }

  private set user(value: UserInterface | null) {
    this._user = value;

    if (value) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(value));
      }
    } else localStorage.clear();
  }

  public get userInfo() {
    return structuredClone(this._user);
  }

  public login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(environment.getAuth, { username, password })
      .pipe(
        map((response) => {
          console.log('RESPONSE', response);
          if (response.error) {
            throw new Error('Login failed');
          }

          // console.log(
          //   'token',
          //   this.getDecodedAccessToken(response.data.accessToken)
          // );

          this.user = this.getDecodedAccessToken(response.token);
          console.log("User",this.user);
          
          localStorage.setItem('accessToken', response.token);
          console.log( "Set", localStorage.setItem('accessToken', response.token));
          
          this.router.navigate(['/projects']);
          return response;
        })
      );
  }

  public logout() {
    this.user = null;
    this.router.navigate(['/login']);
  }

  private _restore() {
    if (typeof localStorage !== 'undefined') {
      this._user = JSON.parse(
        localStorage.getItem('user') || 'null'
      ) as UserInterface;
    }
  }

  public isTokenExpired(token: string): boolean {
    const decodedToken: any = this.getDecodedAccessToken(token);
    const expiryDate: Date = new Date(decodedToken.exp * 1000);
    const currentDate: Date = new Date();
    return expiryDate < currentDate;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token;
  }
}
