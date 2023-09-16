import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home/home.component';
import { UserLoggedinGuard } from './auth/guards/user-loggedin.guard';

const routes: Routes = [
  {
    path:'signup',component:SignUpComponent
  },
  {
    path:'home',component:HomeComponent,canActivate:[UserLoggedinGuard]
  },
  {
    path:'**',pathMatch:'full',redirectTo:'signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
