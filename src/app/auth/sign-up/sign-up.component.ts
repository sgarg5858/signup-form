import { Component } from '@angular/core';
import {NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  constructor(
    private readonly formBuilder:NonNullableFormBuilder,
    public  readonly authService:AuthService
    ){}
  
  
  signupForm= this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
  })

  doSignup()
  {
    if(this.signupForm.invalid) return;
    
    const userDetails = this.signupForm.value as User;
    this.authService.signUp(userDetails);
  }
}
