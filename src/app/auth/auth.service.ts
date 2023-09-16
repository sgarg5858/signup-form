import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, delay, map, shareReplay } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface AuthState{
  authenticating:boolean;
  userLoggedIn:boolean;
  authError:string|null;
  user:User|null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient,
    private router:Router,
    private _snackBar: MatSnackBar
    ) { }

  private authState= new BehaviorSubject<AuthState>({authenticating:false,userLoggedIn:false,authError:null,user:null});

  public readonly  authenticatingUser$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.authenticating)
  )

  public readonly  userLoggedIn$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.userLoggedIn)
  )

  signUp(user:User){

    this.authState.next({authenticating:true,userLoggedIn:false,authError:null,user:null})

    return this.httpClient.post<{}>('https://run.mocky.io/v3/83a6b808-0c67-4fa9-9879-cb08ea902ea6',user).pipe(delay(2000),shareReplay())
    .subscribe({
       next:()=>{
        
        this.authState.next({authenticating:false,userLoggedIn:true,authError:null,user});

        this.showSnackbar(`${user.firstName} you have signed up successfully`,2000,"");
        this.router.navigateByUrl('home');

       },
       error:()=>{
        this.authState.next({authenticating:false,userLoggedIn:false,authError:'Something went wrong',user:null});
        this.showSnackbar(this.authState.value.authError!,5000,"error-message");
       }
    })
    
  }

  showSnackbar(message:string,duration:number,panelClass?:string)
  {
      this._snackBar.open(
        message,
        '',
        {
          duration,panelClass,
          verticalPosition:'top',
          horizontalPosition:'right',
          politeness:'polite',
        });
  }
  
}
