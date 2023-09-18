import { Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { UserLoggedinGuard } from './auth/guards/user-loggedin.guard';

export const appRoutes: Routes = [
    {
      path:'signup',component:SignUpComponent
    },
    {
      path:'home',
      loadComponent:()=>import('./home/home/home.component').then((c)=>c.HomeComponent),
      canActivate:[UserLoggedinGuard]
    },
    {
      path:'**',pathMatch:'full',redirectTo:'signup'
    }
  ];