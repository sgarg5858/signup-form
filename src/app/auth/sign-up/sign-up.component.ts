import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {

  constructor(
    private readonly formBuilder:NonNullableFormBuilder,
    public  readonly authService:AuthService
    ){}
  
  
  signupForm= this.formBuilder.group({
    firstName:['Sanjay',[Validators.required]],
    lastName:['Garg',[Validators.required]],
    email:['sgarg5858@gmail.com',[Validators.required,Validators.email]]
  },{updateOn:'blur'});
  
  //setting updateOn to blur, as our functionality , doesn't need to be checked on every input change
  // and this also allows to remove dirty or touched check in the html while showing the errors

  doSignup()
  {
    //Our form should be valid, before we try to do signup,otherwise just stop!
    if(this.signupForm.invalid) return;
    
    const userDetails = this.signupForm.value as User;
    
    // try {
    //   setTimeout(()=>{
    //     ({} as any).signup();
    //   })
    // } catch (error:unknown) {
    //   {
    //     throw error;
    //   }
    // }

    this.authService.signUp(userDetails);
  }
}
