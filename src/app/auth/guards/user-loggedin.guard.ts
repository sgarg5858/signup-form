import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedinGuard implements CanActivate{

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }
  canActivate(): Observable<boolean | UrlTree> {
    //This guard will protect routes from unauthenticated users
    // If user logged in they navigation will continue
    //If not loggedIn user will be routed to signup page!
    return this.authService.userLoggedIn$.pipe(
      map((isLoggedIn)=> isLoggedIn ? isLoggedIn: this.router.createUrlTree(['signup'])),
      take(1)
    )
  }
}
