import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  {
    path:"",
    component:AuthComponent,
    children:[
      {
        path:"sign-in",
        component:SignInComponent,
      },
      {
        path:"register",
        component:RegisterComponent,
      },
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
