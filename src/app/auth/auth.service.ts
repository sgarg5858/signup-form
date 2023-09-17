import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, delay, map, shareReplay } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AriaLivePoliteness } from '@angular/cdk/a11y';

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

  // Using this Behavior Subject inside a Service Pattern is helpful
  // This also provides a good reactive solution for state management & 
  // As the application grows, if we feel that we need to introduces Ngrx for state-management Solution
  // Then we can easily adapt Ngrx with Facades & we don't need to touch our components at all.
  private authState= new BehaviorSubject<AuthState>({authenticating:false,userLoggedIn:false,authError:null,user:null});

  public readonly  authenticatingUser$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.authenticating)
  )

  public readonly  userLoggedIn$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.userLoggedIn)
  )

  public readonly  user$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.user)
  )


  signUp(user:User){
    // 1. Setting the loading flags, so that we can show user, signup is in progress
    this.authState.next({authenticating:true,userLoggedIn:false,authError:null,user:null})

    return this.httpClient.post<{}>('https://run.mocky.io/v3/83a6b808-0c67-4fa9-9879-cb08ea902ea6',user).pipe(delay(2000),shareReplay())
    .subscribe({
       next:()=>{
        
        // 2. Once signup is successful, we stop the loading indicator
        // we show a snackbar to user indicating that Signup is successful
        // And then we navigate to Home Page
        this.authState.next({authenticating:false,userLoggedIn:true,authError:null,user});

        this.showSnackbar(`${user.firstName}, you have signed up successfully`,2000,"",);
        this.navigateTo('home');
        
       },
       error:()=>{
        // 3. If we face any errors during signup from the backend API, we can get the error information,
        // and tell the user about the information via snackbar or we can also use authError observable inside
        // component to render the error info there, like this email is already taken or some other errors,
        this.authState.next({authenticating:false,userLoggedIn:false,authError:'Something went wrong',user:null});
        this.showSnackbar(this.authState.value.authError!,5000,"error-message","assertive");
       }
    })
    
  }

  showSnackbar(
    message:string,duration:number,panelClass?:string,
    politeness:AriaLivePoliteness='polite',
    verticalPosition:MatSnackBarVerticalPosition='top',
    horizontalPosition:MatSnackBarHorizontalPosition='right',
    )
  {
      this._snackBar.open(
        message,
        '',
        { duration,panelClass,politeness, 
          verticalPosition,horizontalPosition,
        });
  }

  navigateTo(url:string)
  {
    this.router.navigateByUrl(url);
  }
  
}
