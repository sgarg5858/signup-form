import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockAuthService } from '../mocks/mock-auth.service';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SignUpComponent,NoopAnimationsModule ],
      providers:[
        FormBuilder,
        {
          provide:AuthService,
          useClass:MockAuthService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid,when correct values are filled in the form', () => {
   component.signupForm.setValue({
    firstName:'Sanjay',
    lastName:'Garg',
    email:'sgarg5858@gmail.com'
   });
   fixture.detectChanges();

   expect(component.signupForm.valid).toBe(true);
  });

  it('form should be invalid,when wrong values are filled in the form', () => {
    component.signupForm.setValue({
     firstName:'Sanjay',
     lastName:'Garg',
     email:'sgarg5858'
    });
    fixture.detectChanges();
    expect(component.signupForm.valid).toBe(false);

   });
  

});
