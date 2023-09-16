import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
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
    return this.authService.userLoggedIn$.pipe(
      tap((loggedIn)=>{
        console.log(loggedIn)
        
        if(!loggedIn)
        {
          this.router.navigateByUrl('/signup')
        }
      }),
      take(1)
    )
  }
}
