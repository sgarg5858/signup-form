import { BehaviorSubject, delay, map, of } from "rxjs";
import { AuthState } from "../auth.service";
import { User } from "../user";

export class MockAuthService{
    private authState= new BehaviorSubject<AuthState>({authenticating:false,userLoggedIn:false,authError:null,user:null});

  public readonly  authenticatingUser$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.authenticating),
  )

  public readonly  userLoggedIn$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.userLoggedIn)
  )

  public readonly  user$ = this.authState.asObservable().pipe(
    map((authState:AuthState)=>authState.user)
  )
  signUp(user:User){
    of(user)
    .pipe(delay(2000))
    .subscribe({
       next:()=>{
        this.authState.next({authenticating:false,userLoggedIn:true,authError:null,user});
       },
       error:()=>{
        this.authState.next({authenticating:false,userLoggedIn:false,authError:'Something went wrong',user:null});
       }
    })
    
  }

  
  
}